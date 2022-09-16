import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cart } from './models/cart';
import { CartItem } from './models/cartItem';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartChangedEvent: EventEmitter<null> = new EventEmitter()
  myCart: Cart;
  baseUrl: string

  notifyCartChange() {
    this.cartChangedEvent.emit()
  }

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://localhost:3000/api/Cart/'
    this.myCart = new Cart(1, []);
  }

  getCartForUserHttp(id: number): Observable<Cart> {
    return this.httpClient.get<Cart>(this.baseUrl + 'id?id=' + id).pipe(retry(1), catchError(this.httpError))
  }

  getCartItems() {
    return this.myCart.cartItems;
  }



  updateCart(userId: number, newCart: Cart) {
    console.log(newCart);
    
    return this.httpClient.post<Cart>(this.baseUrl + 'SaveCart', newCart).pipe(retry(1), catchError(this.httpError))
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

  removeProductHttp(prod: Product, userId: number){
    return this.httpClient.put<Cart>(this.baseUrl +'removeFromCart?cartId='+userId+'&productId='+prod.id,prod).pipe(retry(1), catchError(this.httpError))
  }


  addProductHttp(prod: Product, userId: number) {

    return this.httpClient.put<Cart>(this.baseUrl +'addToCart?cartId='+userId+'&productId='+prod.id,prod).pipe(retry(1), catchError(this.httpError))
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
      console.log(currentItem);
      this.removeProductHttp(prod,userId).subscribe(data =>{
        console.log(data);
      })
      this.updateCart(userId, cart).subscribe(data => {
        console.log("Cart Updated")
        this.notifyCartChange()
      })
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
