import { HttpClient , HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cart } from './models/cart';
import { CartItem } from './models/cartItem';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  myCart:Cart;
  constructor() {
    
    let u_Id = parseInt(localStorage.getItem('uid')!);
    this.myCart = new Cart(1,u_Id);

   }

   getCartItems(){
    return this.myCart.cartItems;
   }
   getCart(){
    return this.myCart;
   }
   addProduct(prod:Product){
    let flag = false;
    
    this.myCart.cartItems.forEach((element) =>{
      if(element.product.id==prod.id){
        element.count++;
        flag = true;
      }
    })
    if(flag == false){
      let newItem = new CartItem(prod);
      this.myCart.cartItems.push(newItem);
    }
    console.log(this.getCartItems());

    
  //   this.myCart.cartItems.forEach((element) =>{
  //     if(element.product.id==prod.id){
  //       element.count++;
  //       flag = true;
  //     }
  //   })
  //   if(flag == false){
  //     let newItem = new CartItem(prod);
  //     this.myCart.cartItems.push(newItem);
  //   }
  //   console.log(this.getCartItems());
  //   //return this.http.post<Product>(this.baseUrl + '/cart',prod).pipe(retry(1), catchError(this.httpError))
   }
   decreseProduct(prod:Product){
    var currentItem = this.myCart.cartItems.find((element) => element.product.id==prod.id)!;
    if(currentItem.count == 1){
      this.removeProduct(prod.id);
    }
    currentItem.count--;
   }
   removeProduct(id:number){
    var currentItem = this.myCart.cartItems.find((element) => element.product.id==id)!;
    let index = this.myCart.cartItems.indexOf(currentItem);
    this.myCart.cartItems.splice(index,1);
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
}
