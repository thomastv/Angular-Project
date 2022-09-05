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
    this.productsService.getProductsHttp().subscribe(data => { this.productsArray = data })
    this.selectedProductSupplierId = 0
  }

  ngOnInit(): void {

  }

  onChangeProduct(product: Product) {
    this.selectedProduct = product;
  }

  viewProduct(id: number) {
    console.log("view product clicked", id)
    this.productsService.getProductByIdHttp(id).subscribe(data => { this.selectedProduct = data })
  }
  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productsService.deleteProduct(id)
    } else {
      console.log('Nope');
    }

  }

  addProductToCart(id: number) {
    console.log(id)
  }

  onSubmit(username: HTMLInputElement, password: HTMLInputElement) {
    console.log("username", username.value, "password", password.value)

  }

}
