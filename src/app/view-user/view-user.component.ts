import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  usersList: User[] = []
  constructor(private userService: UserService) {
    userService.getUsersHttp().subscribe(data => {
      this.usersList = data
    })
  }

  ngOnInit(): void {
  }

  deleteUser(id: number) {

    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id)
    } else {
      console.log('Nope');
    }

  }

}
