import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsArray: Product[] = []


  constructor() {
    this.productsArray = [
      new Product(1, "Laptop", 20000, 1, "assets/images/laptop.jpg"),
      new Product(2, "USB", 200, 2, "assets/images/usb.jpg"),
      new Product(3, "Mobile", 15000, 3, "assets/images/mobile.jpg"),
      new Product(4, "Cable", 500, 4, "assets/images/cable.jpg"),
    ]
  }

  getProducts(): Product[] {
    return this.productsArray;
  }

  addProduct(id: number, name: string, price: number, supplier_id: number, image_path: string) {
    var newProduct = new Product(id, name, price, supplier_id, image_path)
    this.productsArray.push(newProduct)

  }

  updateProduct(oldProduct: Product, id: number, name: string, price: number, supplier_id: number, image_path: string) {
    oldProduct.id = id
    oldProduct.name = name
    oldProduct.price = price
    oldProduct.supplier_id = supplier_id
    oldProduct.img_path = image_path
  }

  deleteProduct(id: number) {
    var product = this.productsArray.find(product => product.id == id)
    var index = this.productsArray.indexOf(product!)
    this.productsArray.splice(index, 1)

  }

  getProductById(id: number): Product | undefined {
    return this.productsArray.find(element => element.id == id)


    // this.productsArray.forEach(product => {
    //   if (product.id == id) {
    //     return product
    //   }
    // })
    // throw "";
  }



}
