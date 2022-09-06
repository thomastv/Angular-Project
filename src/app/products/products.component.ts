import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private productsService: ProductService, private cartService: CartService, private router: Router) {
    this.productsService.getProductsHttp().subscribe(data => { this.productsArray = data })
    this.selectedProductSupplierId = 0
  }

  ngOnInit(): void {

  }

  onChangeProduct(product: Product) {
    this.selectedProduct = product;
  }

  viewProduct(id: number) {
    // console.log("view product clicked", id)
    // this.productsService.getProductByIdHttp(id).subscribe(data => { this.selectedProduct = data })
    this.router.navigate(['product/' + id])
  }
  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct(id)
    } else {
      console.log('Nope');
    }

  }

  addProductToCart(prod: Product) {
    this.cartService.addProduct(prod);
  }

  onSubmit(username: HTMLInputElement, password: HTMLInputElement) {
    console.log("username", username.value, "password", password.value)

  }

}
