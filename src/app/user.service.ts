import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  arrUsers:User[] = []
  constructor() { 
    this.arrUsers = [
      new User(1,"Thomas",123,"admin"),
      new User(2,"Aby",123,"user"),
      new User(1,"Vish",123,"user")
    ]

  }

  getUsers(){
    return this.arrUsers;
  }
  getUserById(id:number){
    return this.arrUsers.find((element) => element.id==id);
  }
  addUser(user:User){
    this.arrUsers.push(user);
  }
  updateUser(user:User){
    this.arrUsers.forEach((element) => {
      if(element.id == user.id){
        element.password = user.password;
        element.user_Name = user.user_Name;
        element.role = user.role;
      }
    })
  }
  deleteUser(id:number){
    var user = this.arrUsers.find((element) => element.id==id)!;
    let index = this.arrUsers.indexOf(user);
    this.arrUsers.splice(index,1);
  }
  
}
