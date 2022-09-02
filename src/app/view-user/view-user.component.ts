import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  usersList: User[]
  constructor(private userService: UserService) {
    this.usersList = userService.getUsers()
  }

  ngOnInit(): void {
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
  }

}
