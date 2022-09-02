import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit {
  arrUsers:User[];
  constructor(private userService:UserService) { 
    this.arrUsers = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

  deleteUser(id:number){
    this.userService.deleteUser(id);
  }
}
