import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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
  cartChangeSubscription: Subscription

  constructor(private cartService: CartService) {
    this.cartChangeSubscription = cartService.cartChangedEvent.subscribe(data => {
      this.onCartChange()
    })
  }

  onCartChange() {
    var userId = localStorage.getItem('userId')!
    this.cartService.getCartForUserHttp(parseInt(userId)).subscribe(cart => {
      this.myCartItems = cart.cartItems
    })
  }

  ngOnInit(): void {
    this.onCartChange()
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
    var sub = this.cartService.addProductHttp(prod.product, parseInt(userId));
    sub.add(() => { console.log("FINALIZER INCREASE ITEM") })
  }
  decreseItem(prod: CartItem) {
    var userId = localStorage.getItem('userId')!
    this.cartService.decreaseProductCountHttp(prod.product, parseInt(userId));
  }
}
