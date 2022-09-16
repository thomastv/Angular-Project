import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, lastValueFrom, Observable, retry, throwError } from 'rxjs';
import { CartService } from './cart.service';
import { Cart } from './models/cart';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userChangeEvent:EventEmitter<null> = new EventEmitter();
  isLoggedIn: boolean = false
  loggedInUser: User | undefined

  private usersList: User[]
  baseUrl: string

  notifyUserChange(){
    this.userChangeEvent.emit();
  }
  constructor(private httpClient: HttpClient, private cartService: CartService) {
    this.baseUrl = 'https://localhost:3000/api/User'
    this.usersList = [
      // new User(1, "mushthaq", "Qwerty123", "admin", "test@123.com"),
      // new User(2, "testuser", "Qwerty123", "user", "test4@123.com"),
      // new User(4, "pcmushthaq", "Qwerty123", "user", "test2@123.com"),
      // new User(5, "mohammed", "Qwerty123", "user", "test3@123.com"),
    ]
    this.checkLoginStatus()
  }

  checkLoginStatus() {
    var isLoggedInPreviously = localStorage.getItem('isLoggedIn')
    if (isLoggedInPreviously != null && isLoggedInPreviously == 'true') {
      this.isLoggedIn = true
      var userId = localStorage.getItem('userId')!
      this.loggedInUser = this.usersList.find(user => user.id.toString() == userId)
      console.log("user has logged in previously")
    }
  }

  getUsers(): User[] {
    return this.usersList
  }

  getUsersHttp(): Observable<User[]> {
    var observable = this.httpClient.get<User[]>(this.baseUrl).pipe(retry(1), catchError(this.httpError))
    return observable
  }
  
  getUserByIdHttp(id:number): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + '/id?id=' + id).pipe(retry(1), catchError(this.httpError))
  }

  addUser(id: number, username: string, password: string, role: string, email: string) {
    let cart = new Cart(0,[]);
    var newUser = new User(id, username, password, role, email,cart)
    this.usersList.push(newUser)
    this.notifyUserChange();
  }

  addUserHttp(id: number, username: string, password: string, role: string, email: string){
    let cart = new Cart(0,[]);
    var newUser = new User(0, username, password, role, email,cart);
    this.notifyUserChange();
    console.log("User addrr")
    return this.httpClient.post<User>(this.baseUrl + '/SaveUser', newUser).pipe(retry(1), catchError(this.httpError)).subscribe((evt)=>{
      this.notifyUserChange();
    })
  }




  updateUser(oldUser: User, id: number, username: string, email: string, password: string, role: string) {
    oldUser.id = id
    oldUser.username = username
    oldUser.email = email
    oldUser.password = password
    oldUser.role = role
  }

  updateUserHttp(oldUser: User, username: string, email: string, password: string, role: string){
    oldUser.username = username
    //let uid = oldUser.id;
    console.log(oldUser.id)
    oldUser.email = email
    oldUser.password = password
    oldUser.role = role
    console.log(oldUser.cart)
    if(oldUser.cart == null)
      oldUser.cart = new Cart(0,[]);
    return this.httpClient.post<User>(this.baseUrl + '/SaveUser', oldUser).pipe(retry(1), catchError(this.httpError)).subscribe((evt)=>{
      this.notifyUserChange();
    })
  }
  getUserByMailAndPassword(mail: string, password: string) {
    return this.httpClient.get<User[]>(this.baseUrl + '/email?email='+mail).pipe(retry(1), catchError(this.httpError))
  }

  getUserById(id: number) {
    return this.httpClient.get<User>(this.baseUrl + '/id?id=' + id).pipe(retry(1), catchError(this.httpError))
  }

  loginUser(user: User): User | undefined {
    // var user = this.usersList.find(user => user.email == email && user.password == password)
    if (user != undefined) {
      this.isLoggedIn = true
      this.loggedInUser = user
      localStorage.setItem("role", user.role)
      localStorage.setItem("isLoggedIn", 'true')
      localStorage.setItem("userId", user.id.toString())
      //this.cartService.generateCart(user.id)
    }
    return user
  }

  logoutUser() {
    this.isLoggedIn = false
    this.loggedInUser = undefined
    localStorage.removeItem("role")
    localStorage.removeItem('userId')
    localStorage.setItem('isLoggedIn', 'false')
    window.location.href = '/home'
  }

  deleteUser(id: number) {
    var user = this.usersList.find(user => user.id == id)
    var index = this.usersList.indexOf(user!)
    this.usersList.splice(index, 1)
  }

  deleteUserHttp(id:number){
    return this.httpClient.delete<User>(this.baseUrl + '/DeleteUser/id?id='+ id).pipe(retry(1), catchError(this.httpError)).subscribe((evt)=>{
      this.notifyUserChange();
    })
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
