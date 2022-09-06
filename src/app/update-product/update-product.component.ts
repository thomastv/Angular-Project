import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  myForm: FormGroup
  submitted = false
  selectedProduct: Product | undefined


  productsArray: Product[] = []


  constructor(private productService: ProductService, fb: FormBuilder) {
    this.productService.getProductsHttp().subscribe(data => { this.productsArray = data });
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'id': [0, Validators.required],
      'price': [0, Validators.required],
      'supplier_id': [0, Validators.required],
      'image_path': ['', Validators.required],
    })
  }

  get f() { return this.myForm.controls }

  ngOnInit(): void {
  }

  onChangeType(event: any) {
    console.log(event.target.value)
    var newId = parseInt(event.target.value.split(':')[1].trim())
    console.log(newId)
    this.selectedProduct = this.productsArray.find(product => product.id == newId)!
    this.myForm.get('id')?.setValue(this.selectedProduct.id)
    this.myForm.get('name')?.setValue(this.selectedProduct.name)
    this.myForm.get('supplier_id')?.setValue(this.selectedProduct.supplier_id)
    this.myForm.get('price')?.setValue(this.selectedProduct.price)
    this.myForm.get('image_path')?.setValue(this.selectedProduct.img_path)
  }

  UpdateProduct() {
    this.productService.updateProduct(this.selectedProduct!, this.myForm.value.id, this.myForm.value.name, this.myForm.value.price, this.myForm.value.supplier_id, this.myForm.value.image_path);
    this.productService.updateProductHttp(this.selectedProduct!, this.myForm.value.id, this.myForm.value.name, this.myForm.value.price, this.myForm.value.supplier_id, this.myForm.value.image_path).subscribe(data => {
      console.log("Updated", data)
    });
    document.getElementById('updateProductModalButton')?.click()
  }

}
