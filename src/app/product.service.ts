import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  arrProducts:Product[]=[]
  currProduct:Product;
  constructor() { 
    this.arrProducts = [new Product(1,"Laptop",140000,1,"assets/images/laptop.png"),
        new Product(2,"Monitor",120000,2,"assets/images/monitor.png"),
        new Product(3,"USB",4000,3,"assets/images/hdmi.jpg"),
        new Product(4,"Adapter",6000,1,"assets/images/honeywell.jpg")
      ]
      this.currProduct=this.arrProducts[0]
  }
  getProducts(){
    return this.arrProducts;
  }
  getProductById(id:number){
    this.currProduct = this.arrProducts.find((element) => element.id==id)!
    return this.currProduct;
  }

  addProduct(p:Product){
    this.arrProducts.push(p);
  }
  updateProduct(product:Product){
    this.arrProducts.forEach((element) =>{
      if(element.id==product.id){
          element.pName = product.pName;
          element.price = product.price;
      }
    })
  }
  deleteProduct(id:number){
    var product = this.arrProducts.find((element) => element.id==id)!;
    let index = this.arrProducts.indexOf(product);
    this.arrProducts.splice(index,1);
  }
}
