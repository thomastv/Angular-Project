import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersList: User[]

  constructor() {
    this.usersList = [
      new User(1, "mushthaq", "Qwerty123", "admin", "test@123.com"),
      new User(2, "testuser", "Qwerty123", "user", "test4@123.com"),
      new User(4, "pcmushthaq", "Qwerty123", "user", "test2@123.com"),
      new User(5, "mohammed", "Qwerty123", "user", "test3@123.com"),
    ]
  }

  getUsers(): User[] {
    return this.usersList
  }

  addUser(id: number, username: string, password: string, role: string, email: string) {
    var newUser = new User(id, username, password, role, email)
    this.usersList.push(newUser)
  }

  updateUser(oldUser: User, id: number, username: string, email: string, password: string, role: string) {
    oldUser.id = id
    oldUser.username = username
    oldUser.email = email
    oldUser.password = password
    oldUser.role = role
  }

  loginUser(email: string, password: string): User | undefined {
    return this.usersList.find(user => user.email == email && user.password == password)
  }

  deleteUser(id: number) {
    var user = this.usersList.find(user => user.id == id)
    var index = this.usersList.indexOf(user!)
    this.usersList.splice(index, 1)
  }


}
