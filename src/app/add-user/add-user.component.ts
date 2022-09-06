import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  myForm: FormGroup
  submitted = false

  constructor(private userService: UserService, fb: FormBuilder, private cartService: CartService) {

    this.myForm = fb.group({
      'username': ['', Validators.required],
      'id': [0, Validators.required],
      'password': ['', Validators.required],
      'email': ['', Validators.required],
      'role': ['', Validators.required],
    })


  }

  ngOnInit(): void {
  }

  get f() { return this.myForm.controls }

  AddUser() {
    this.submitted = true
    if (!this.myForm.valid) {
      console.log("Invalid")
    }
    else {
      this.userService.addUser(this.myForm.value.id, this.myForm.value.username, this.myForm.value.password, this.myForm.value.role, this.myForm.value.email)
      document.getElementById('addUserModalButton')?.click()
      this.cartService.createCart(this.myForm.value.id).subscribe(data => {
        console.log("cart created")
      })
    }
  }

  toggleModal() {
    document.getElementById('openModalButton')?.click()

  }

}
