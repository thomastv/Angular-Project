import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private productsService: ProductService) {
    this.productsArray = productsService.getProducts()
    this.selectedProductSupplierId = 0
  }

  ngOnInit(): void {

  }

  onChangeProduct(product: Product) {
    this.selectedProduct = product;
  }

  viewProduct(id: number) {
    console.log("view product clicked", id)
    this.selectedProduct = this.productsService.getProductById(id)
  }
  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct(id)
    } else {
      console.log('Nope');
    }

  }

  onSubmit(username: HTMLInputElement, password: HTMLInputElement) {
    console.log("username", username.value, "password", password.value)

  }

}
