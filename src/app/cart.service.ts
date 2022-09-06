import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cart } from './models/cart';
import { CartItem } from './models/cartItem';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  myCart: Cart;
  baseUrl: string
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000'
    let u_Id = parseInt(localStorage.getItem('uid')!);
    this.myCart = new Cart(1, []);
  }

  getCartForUserHttp(id: number): Observable<Cart> {
    return this.httpClient.get<Cart>(this.baseUrl + '/carts/' + id).pipe(retry(1), catchError(this.httpError))
  }

  getCartItems() {
    return this.myCart.cartItems;
  }

  // Generate a cart if there is no existing cart
  generateCart(userId: number) {
    return this.getCartForUserHttp(userId).subscribe(data => { }, error => {
      var newCart = new Cart(userId, [])
      return this.httpClient.post<Cart>(this.baseUrl + '/carts/', newCart).pipe()
    })

  }

  createCart(userId: number) {
    var newCart = new Cart(userId, [])
    return this.httpClient.post<Cart>(this.baseUrl + '/carts/', newCart).pipe(retry(1), catchError(this.httpError))
  }

  updateCart(userId: number, newCart: Cart) {
    return this.httpClient.put<Cart>(this.baseUrl + '/carts/' + userId, newCart).pipe(retry(1), catchError(this.httpError))
  }



  addProduct(prod: Product) {
    let flag = false;

    this.myCart.cartItems.forEach((element) => {
      if (element.product.id == prod.id) {
        element.count++;
        flag = true;
      }
    })
    if (flag == false) {
      let newItem = new CartItem(prod);
      this.myCart.cartItems.push(newItem);
    }
    console.log(this.getCartItems());
  }




  addProductHttp(prod: Product, userId: number) {
    this.getCartForUserHttp(userId).subscribe(cart => {
      let flag = false;

      cart.cartItems.forEach((element) => {
        if (element.product.id == prod.id) {
          element.count++;
          flag = true;
        }
      })
      if (flag == false) {
        let newItem = new CartItem(prod);
        cart.cartItems.push(newItem);
      }

      this.updateCart(userId, cart).subscribe(data => { console.log("Cart Updated",data) })
    })
  }

  decreaseProductCountHttp(prod: Product, userId: number) {
    this.getCartForUserHttp(userId).subscribe(cart => {
      var currentItem = cart.cartItems.find((element) => element.product.id == prod.id)!;
      if (currentItem.count == 1) {
        var currentItem = cart.cartItems.find((element) => element.product.id == prod.id)!;
        let index = cart.cartItems.indexOf(currentItem);
        cart.cartItems.splice(index, 1);
      }
      currentItem.count--;

      this.updateCart(userId, cart).subscribe(data => { console.log("Cart Updated") })
    })
  }



  decreseProduct(prod: Product) {
    var currentItem = this.myCart.cartItems.find((element) => element.product.id == prod.id)!;
    if (currentItem.count == 1) {
      this.removeProduct(prod.id);
    }
    currentItem.count--;
  }
  removeProduct(id: number) {
    var currentItem = this.myCart.cartItems.find((element) => element.product.id == id)!;
    let index = this.myCart.cartItems.indexOf(currentItem);
    this.myCart.cartItems.splice(index, 1);
    console.log(this.getCartItems());
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

  // httpErrorGetCart(error: HttpErrorResponse) {
  //   let msg = '';
  //   if (error.error instanceof ErrorEvent) {
  //     msg = error.error.message;
  //   }

  //   if (error.status == 404) {
  //     console.log("ERRORS", error)
  //     var frags = error.url?.split('/')
  //     var userId = frags?.pop()
  //     if (userId != undefined)
  //       this.createCart(parseInt(userId!)).subscribe(data => { console.log(data) })
  //   }
  //   else {
  //     msg = `Error Code:${error.status}\nMessafe:${error.message}`;
  //   }
  //   console.log(msg);
  //   return throwError(msg);
  // }
}
