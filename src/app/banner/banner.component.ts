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
      var loggedInUser = this.userService.loginUser(this.loginForm.value.email, this.loginForm.value.password);
      if (loggedInUser == undefined) {
        alert("Invalid Credentials")
      }
      else {
        localStorage.setItem("role", loggedInUser.role)
        document.getElementById('loginModalButton')?.click()
        this.router.navigateByUrl('home')
      }
    }

  }



}
