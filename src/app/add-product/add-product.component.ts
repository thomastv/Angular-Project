import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  myForm:FormGroup;
  submitted = false;
  constructor(fb:FormBuilder,private productService:ProductService) { 
    this.myForm = fb.group({
      'prodName': ['',Validators.required],
      'prodId': [0,Validators.required],
      'prodPrice': [0,Validators.required]
    });
  }

  ngOnInit(): void {
  }
  get f() {
    return this.myForm.controls;
  }
  onSubmit(value:any){
    this.submitted = true;
    console.log(this.myForm.controls['prodName'].errors)
    console.log(this.submitted)
    
    let prod = new Product(value.prodId,value.prodName,value.prodPrice,1,"");
    this.productService.addProduct(prod);
  }
}
