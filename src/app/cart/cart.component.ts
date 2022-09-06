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
  myCartItems: CartItem[] = [];

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    var userId = localStorage.getItem('userId')!
    this.cartService.getCartForUserHttp(parseInt(userId)).subscribe(cart => {
      console.log("Got Cart for user", cart)
      console.log("Cart Total", cart)
      this.myCartItems = cart.cartItems

    })
  }

  get totalPrice() {
    var total = 0
    this.myCartItems.forEach(cartItem => {
      total += (cartItem.count * cartItem.product.price)
    })
    return total
  }

  increaseItem(prod: CartItem) {
    var userId = localStorage.getItem('userId')!
    this.cartService.addProductHttp(prod.product, parseInt(userId));
  }
  decreseItem(prod: CartItem) {
    var userId = localStorage.getItem('userId')!
    this.cartService.decreaseProductCountHttp(prod.product, parseInt(userId));
  }
}
