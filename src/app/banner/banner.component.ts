import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from '../helpers/validators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  signUpForm: FormGroup
  loginForm: FormGroup
  submitted = false

  constructor(private userService: UserService, fb: FormBuilder, private router: Router) {

    this.signUpForm = fb.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
      'confirmPassword': ['', Validators.required]
    }, { validator: MustMatch('password', 'confirmPassword') })

    this.loginForm = fb.group({
      'password': ['', Validators.required],
      'email': ['', Validators.required],
    })



  }

  get isLoggedIn() { return this.userService.isLoggedIn }

  ngOnInit(): void {
  }

  get f() { return this.signUpForm.controls }

  onSignUp() {
    this.submitted = true
    if (this.signUpForm.invalid) {
      alert("Please enter all details")
    }
    else {
      var randomId = Math.floor(Math.random() * (100000 + 1));
      var role = 'user'
      this.userService.addUser(randomId, this.signUpForm.value.username, this.signUpForm.value.password, role, this.signUpForm.value.email)
      document.getElementById('signUpModalButton')?.click()
    }
  }

  onLogin() {
    this.submitted = true
    if (this.loginForm.invalid) {
      alert("Please enter all details")
    }
    else {
      this.userService.getUserByMailAndPassword(this.loginForm.value.email, this.loginForm.value.password).subscribe(users => {
        if (users.length == 0) {
          alert("Invalid Credentials")
        }
        else {
          var user = users[0]
          console.log("User Data", user)
          this.userService.loginUser(user)
          document.getElementById('loginModalButton')?.click()
          this.router.navigateByUrl('home')
        }
      }, error => {
        console.log("Error from banner comp", error)
        alert("Invalid Credentials")
      });
    }
  }

  onLogOut() {
    if (confirm('Are you sure you want to logout?')) {
      this.userService.logoutUser()
    } else {
      console.log('Nope');
    }
  }



}
