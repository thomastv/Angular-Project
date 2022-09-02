import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  myForm: FormGroup
  submitted = false

  constructor(private productsService: ProductService, fb: FormBuilder) {

    this.myForm = fb.group({
      'name': ['', Validators.required],
      'id': [0, Validators.required],
      'price': [0, Validators.required],
      'supplier_id': [0, Validators.required],
      'image_path': ['', Validators.required],
    })


  }

  ngOnInit(): void {
  }

  get f() { return this.myForm.controls }

  AddProduct() {
    this.submitted = true
    console.log(this.myForm.controls['name'])
    if (!this.myForm.valid) {
      console.log("Invalid")
    }
    else {
      this.productsService.addProduct(this.myForm.value.id, this.myForm.value.name, this.myForm.value.price, this.myForm.value.supplier_id, this.myForm.value.image_path)

    }
  }

}
