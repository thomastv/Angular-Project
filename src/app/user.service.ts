import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false

  private usersList: User[]
  baseUrl: string

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
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

  getUsersHttp(): Observable<User[]> {
    var observable = this.httpClient.get<User[]>(this.baseUrl + '/users').pipe(retry(1), catchError(this.httpError))
    return observable
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
    var user = this.usersList.find(user => user.email == email && user.password == password)
    if (user != undefined) {
      this.isLoggedIn = true
    }
    return user
  }

  logoutUser() {
    this.isLoggedIn = false
    localStorage.removeItem("role")
    window.location.href = '/home'
  }

  deleteUser(id: number) {
    var user = this.usersList.find(user => user.id == id)
    var index = this.usersList.indexOf(user!)
    this.usersList.splice(index, 1)
  }

  httpError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      msg = error.error.message;
    }
    else {
      msg = `Error Code:${error.status}\nMessafe:${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }


}
