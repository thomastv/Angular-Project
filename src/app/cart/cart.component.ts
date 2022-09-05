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
  myCartItems:CartItem[];
  constructor(private cartService:CartService) {
      this.myCartItems = cartService.getCartItems();
   }

  ngOnInit(): void {
  }
  increaseItem(prod:CartItem){
    this.cartService.addProduct(prod.product);
  }
  decreseItem(prod:CartItem){
    this.cartService.decreseProduct(prod.product);
  }
}
