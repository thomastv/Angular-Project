import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  @Input() isAdmin: boolean = false

  productsArray: Product[] = []
  selectedProduct: Product | undefined
  selectedProductSupplierId: number
  productsChangeSubscribe:Subscription;
  constructor(private productsService: ProductService, private cartService: CartService, private router: Router) {
    this.productsService.getProductsHttp().subscribe(data => { this.productsArray = data })
    this.selectedProductSupplierId = 0
    this.productsChangeSubscribe = productsService.productChangeEvent.subscribe(data =>{
      this.onProductsChanged();
    })
  }
  onProductsChanged(){
    this.productsService.getProductsHttp().subscribe(data => { this.productsArray = data })
  }
  ngOnInit(): void {

  }

  onChangeProduct(product: Product) {
    this.selectedProduct = product;
  }

  viewProduct(id: number) {
    this.router.navigate(['product/' + id])
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct(id)
      this.productsService.deleteProductHttp(id)
    } else {
      console.log('Nope');
    }

  }

  addProductToCart(prod: Product) {
    var userId = localStorage.getItem('userId')
    if (userId == undefined) {
      console.log("Not Logged In")
      alert("Please log in to continue")
      return
    }
    this.cartService.addProductHttp(prod, parseInt(userId!)).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(username: HTMLInputElement, password: HTMLInputElement) {
    console.log("username", username.value, "password", password.value)

  }

}
