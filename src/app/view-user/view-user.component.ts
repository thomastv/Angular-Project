import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userArr:User[] = [];
  constructor() { 
    this.userArr= [
      new User(1,"Thomas",123,"Admin"),
      new User(2,"Mushtaq",1234,"Admin"),
      new User(3,"Jijo",12345,"Admin"),
      new User(4,"Tismo",12,"User"),
    ]
  }

  ngOnInit(): void {
  }

}
