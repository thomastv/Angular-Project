import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  baseUrl: string
  myCartItems:CartItem[];
  myCart : Cart;
  constructor(private cartService:CartService,) {
      this.baseUrl = 'http://localhost:3000'
      this.myCartItems = cartService.getCartItems();
      this.myCart = cartService.getCart()
   }

  ngOnInit(): void {
    
  }
  // viewProduct(id : number){
  //   this.cartService.getCartItems
  // }
  increaseItem(prod:CartItem){
    // this.cartService.addProduct(prod.product);
  }
  decreseItem(prod:CartItem){
    this.cartService.decreseProduct(prod.product);
  }
}
