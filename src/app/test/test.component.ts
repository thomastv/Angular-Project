import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CartTemp } from '../models/cartTemp';
import { ProductTemp } from '../models/productTemp';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})



/**
 * @title Stepper overview
 */

export class TestComponent {
  cart:CartTemp;
  color=""
  opac="";
  count:number=0;
  isSubmitted = false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    pName: ['', Validators.required],
    pPrice: ['', Validators.required],
  });
  productFormGroup:FormGroup;
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {
      this.cart = new CartTemp(0);
      this.productFormGroup = this._formBuilder.group({
        products: this._formBuilder.array([this.createProductFormGroup()])
      });
  }
  products():FormArray{
    return this.productFormGroup.get("products") as FormArray;
  }
  createProductFormGroup():FormGroup{
    this.count++;
    return new FormGroup({
      'pName':new FormControl('',Validators.required),
      'pPrice':new FormControl('')
    })

  }
  addMoreProd(){
    const products = this.productFormGroup.get('products') as FormArray
    products.push(this.createProductFormGroup())
  }
  saveFirst(formData:FormGroup){
    console.log(formData);
    this.cart.id = formData.value.firstCtrl;
    console.log(this.cart);
  }
  saveSecond(value:any){
    console.log(value.products);
    let cnt =1;
    // this.cart = new CartTemp(this.cart.id);
    if(this.isSubmitted){
      value.products.forEach((prod:any)=>{
        let product = new ProductTemp(cnt,prod.pName,prod.pPrice);
        this.cart.products.push(product);
        cnt++;
      })
      console.log(this.cart);
    }
  }
  finalSubmit(){
    this.isSubmitted =true;
  }
}
