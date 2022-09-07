import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  myForm: FormGroup
  submitted = false
  selectedUser: User | undefined
  

  usersList: User[]


  constructor(private userService: UserService, fb: FormBuilder) {
    this.usersList = [];
    this.userService.getUsersHttp().subscribe(data => {
      this.usersList = data
      this.selectedUser = this.usersList[0]!
    })
    this.myForm = fb.group({
      'username': ['', Validators.required],
       'id': [0, Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'role': ['', Validators.required],
    })

  }

  get f() { return this.myForm.controls }

  ngOnInit(): void {
  }

  onChangeType(event: any) {
    console.log(event.target.value)
    var newId = parseInt(event.target.value.split(':')[1].trim())
    console.log(newId)
    this.selectedUser = this.usersList.find(product => product.id == newId)!
    // this.myForm.get('id')?.setValue(this.selectedUser.id)
    this.myForm.get('username')?.setValue(this.selectedUser.username)
    this.myForm.get('password')?.setValue(this.selectedUser.password)
    this.myForm.get('email')?.setValue(this.selectedUser.email)
    this.myForm.get('role')?.setValue(this.selectedUser.role)
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser!, this.selectedUser?.id!, this.myForm.value.username, this.myForm.value.email, this.myForm.value.password, this.myForm.value.role);
    this.userService.updateUserHttp(this.selectedUser!, this.myForm.value.username, this.myForm.value.email, this.myForm.value.password, this.myForm.value.role)
    document.getElementById('updateUserModalButton')?.click()
  }

}
