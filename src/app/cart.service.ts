import { Injectable } from '@angular/core';
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
   }

   removeProduct(id:number){
    var currentItem = this.myCart.cartItems.find((element) => element.product.id==id)!;
    let index = this.myCart.cartItems.indexOf(currentItem);
    this.myCart.cartItems.splice(index,1);
    console.log(this.getCartItems());
   }
}
