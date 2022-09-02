import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  arrProducts:Product[]=[]
  CurrentProduct:Product
  currsupplierID:number=0
  constructor(private productService:ProductService,private cartService:CartService) { 
      this.arrProducts = this.productService.getProducts() 
      this.CurrentProduct = new Product(1,"Laptop",140000,1,"assets/images/laptop.png")
  }

  ngOnInit(): void {
  }
  viewDetails(productId:number){
    console.log("Button Clicked")
    this.CurrentProduct = this.productService.getProductById(productId)
    this.currsupplierID = this.CurrentProduct.supplier_id
  }
  onSubmit(uName:HTMLInputElement,pwd:HTMLInputElement){
    console.log(uName.value+" : "+pwd.value);
  }
  onanother(){
    console.log("Hello")
  }
  addToCart(product:Product){
    this.cartService.addProduct(product);
  }
}
