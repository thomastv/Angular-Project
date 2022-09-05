import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productsArray: Product[] = []
  // selectedProduct: Product
  // selectedProductSupplierId: number
  // selectedSupplier: Supplier

  // onNewSupplier(data: any) {
  //   this.selectedSupplier = data
  // }

  constructor() {
    // this.productsArray = [
    //   new Product(1, "Laptop", 20000, 1, "assets/images/laptop.jpg"),
    //   new Product(2, "USB", 200, 2, "assets/images/usb.jpg"),
    //   new Product(3, "Mobile", 15000, 3, "assets/images/mobile.jpg"),
    //   new Product(4, "Cable", 500, 4, "assets/images/cable.jpg"),
    // ]
    // this.selectedProductSupplierId = this.productsArray[0].supplier_id
    // this.selectedProduct = this.productsArray[0]
    // this.selectedSupplier = new Supplier(0, "", "")
  }

  ngOnInit(): void {

  }

  // onChangeProduct(product: Product) {
  //   this.selectedProduct = product;
  //   this.selectedProductSupplierId = product.supplier_id;
  // }

  viewProduct(id: number) {
    console.log("view product clicked", id)
  }

  onSubmit(username: HTMLInputElement, password: HTMLInputElement) {
    console.log("username", username.value, "password", password.value)

  }

}
