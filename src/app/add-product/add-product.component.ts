import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../models/supplier';
import { ProductService } from '../product.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  myForm: FormGroup
  submitted = false
  selectedSupplier: Supplier | undefined


  suppliersList: Supplier[] = []

  constructor(private productsService: ProductService, fb: FormBuilder, private supplierService: SupplierService) {

    this.myForm = fb.group({
      'name': ['', Validators.required],
      'price': [0, Validators.required],
      'supplier_id': [0, Validators.required],
      'image_path': ['', Validators.required],
    })


  }

  onChangeType(event: any) {
    console.log(event.target.value)
    var newId = parseInt(event.target.value.split(':')[1].trim())
    console.log(newId)
    this.selectedSupplier = this.suppliersList.find(product => product.id == newId)!
    this.myForm.get('supplier_id')?.setValue(this.selectedSupplier.id)
  }

  ngOnInit(): void {
    this.supplierService.getSuppliersHttp().subscribe(data => {
      this.suppliersList = data
      this.selectedSupplier = this.suppliersList[0]
    });
  }

  get f() { return this.myForm.controls }

  AddProduct() {
    this.submitted = true
    console.log(this.myForm.controls['name'])
    if (!this.myForm.valid) {
      console.log("Invalid")
    }
    else {

      this.productsService.getProductsHttp().subscribe(products => {
        var maxId = 0
        products.forEach(product => {
          if (product.id > maxId) {
            maxId = product.id
          }
        })
        maxId++
        this.productsService.addProduct(maxId, this.myForm.value.name, this.myForm.value.price, this.myForm.value.supplier_id, this.myForm.value.image_path)
        this.productsService.addProductHttp(maxId, this.myForm.value.name, this.myForm.value.price, this.myForm.value.supplier_id, this.myForm.value.image_path).subscribe(data => {
          console.log("Added", data)
        })
        document.getElementById('addProductModalButton')?.click()

      })

    }
  }

}
