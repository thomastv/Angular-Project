import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  usersList: User[] = []
  userChangeSubscribe:Subscription
  constructor(private userService: UserService,private router:Router) {
    
    this.userChangeSubscribe = userService.userChangeEvent.subscribe(data =>{
      this.onUserChange();
    })
  }

  onUserChange(){
    this.userService.getUsersHttp().subscribe(data => {
      this.usersList = data
      console.log("Event called ")
    })
  }
  ngOnInit(): void {
    this.onUserChange();
  }

  deleteUser(id: number) {

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUserHttp(id)
      console.log("Delete called")
    } else {
      console.log('Nope');
    }

  }
  viewUser(id: number) {

   
      console.log("view user clicked", id)
      // this.productsService.getProductByIdHttp(id).subscribe(data => { this.selectedProduct = data })
      this.router.navigate(['user/' + id])

  }

}
