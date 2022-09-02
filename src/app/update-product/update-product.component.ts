import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  myForm:FormGroup;
  arrProducts:Product[]=[]
  idUpdated:number=0
  product:Product = new Product(0,"",0,0,"");
  constructor(fb:FormBuilder,private productService:ProductService) {
    console.log("Constructor"); 
    this.arrProducts = productService.getProducts();
    this.myForm = fb.group({
      'prodName': [''],
      'prodId': [0],
      'prodPrice': [0],
      'id':[0]
    });
  }

  ngOnInit(): void {
  }
  get f() {
    return this.myForm.controls;
  }
  onChangeType(evt:any,evtvalue:any){
    console.log(evt.target.value);
    var idObtained = evt.target.value;
    this.idUpdated = parseInt(idObtained.split(':')[1].trim());
    for(var i=0;i<this.arrProducts.length;i++){
      if(this.idUpdated == this.arrProducts[i].id){
        this.product = this.arrProducts[i];
      }
    }
    console.log(this.product);
    console.log(this.myForm.controls)
    this.myForm.get('prodName')?.setValue(this.product.pName)
    this.myForm.get('prodId')?.setValue(this.product.id)
    this.myForm.get('prodPrice')?.setValue(this.product.price)


  }
  onSubmit(value:any){
    let updatedProd = new Product(value.prodId,value.prodName,value.prodPrice,this.product.supplier_id,this.product.img_path);
    this.productService.updateProduct(updatedProd);
  }

}
