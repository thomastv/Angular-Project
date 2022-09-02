import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-admin-products',
  templateUrl: './view-admin-products.component.html',
  styleUrls: ['./view-admin-products.component.scss']
})
export class ViewAdminProductsComponent implements OnInit {
  arrProducts:Product[]=[]
  CurrentProduct:Product
  currsupplierID:number=0
  constructor(private productService:ProductService) { 
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
  deleteProduct(productId:number){
    this.productService.deleteProduct(productId);
    console.log("Item deleted")
  }

}
