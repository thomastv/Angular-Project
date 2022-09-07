import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartTemp, ProductTemp, SupplierTemp } from '../models/cartTemp';
import { Supplier } from '../models/supplier';

@Component({
  selector: 'app-material-test',
  templateUrl: './material-test.component.html',
  styleUrls: ['./material-test.component.scss']
})
export class MaterialTestComponent implements OnInit {
  cart: CartTemp | undefined
  count: number = 1
  opacity: number = 0.5
  productForm: FormGroup
  firstFormGroup = this._formBuilder.group({
    userId: [0, Validators.required],
    // amount: ['', Validators.required],
    // id: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    price: [0, Validators.required],
    img_path: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) {
    this.productForm = _formBuilder.group({
      products: _formBuilder.array([this.createProductFormGroup()])
    })
  }

  setOpacity(val: number) {
    this.opacity = val
  }


  ngOnInit(): void {
  }
  createProductFormGroup() {
    this.count++
    var randomId = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000
    var newGroup = this._formBuilder.group({
      name: ['', Validators.required],
      id: [randomId, Validators.required],
      price: [0, Validators.required],
      img_path: ['', Validators.required],
      suppliers: this._formBuilder.array([this.createSuppliersFormGroup()])
    })
    return newGroup
  }

  createSuppliersFormGroup() {
    var newGroup = this._formBuilder.group({
      'name': ['', Validators.required],
      'id': [0, Validators.required],
      'location': ['', Validators.required],
    })
    return newGroup
  }

  addSupplierFormGroup(i: number) {
    const products = this.productForm.get("products") as FormArray
    const suppliers = products.at(i).get('suppliers') as FormArray
    suppliers.push(this.createSuppliersFormGroup())

  }

  addProductFormGroup() {
    const products = this.productForm.get("products") as FormArray
    products.push(this.createProductFormGroup())
  }

  removeProductFormGroup(i: number) {
    const products = this.productForm.get("products") as FormArray
    if (products.length > 1) {
      products.removeAt(i)
    }
    else {
      products.reset()
    }
  }

  removeSupplierFormGroup(i: number, j: number) {
    const products = this.productForm.get("products") as FormArray
    const suppliers = products.at(i).get('suppliers') as FormArray
    if (suppliers.length > 1) {
      suppliers.removeAt(j)
    }
    else {
      suppliers.reset()
    }
  }

  products(): FormArray {
    return this.productForm.get("products") as FormArray
  }
  suppliers(i: number): FormArray {
    const products = this.productForm.get("products") as FormArray
    const suppliers = products.at(i).get('suppliers') as FormArray
    return suppliers
  }

  saveCartDetails(input: any) {
    console.log("Save Cart Details", input)
    var id = parseInt(input['userId'])
    this.cart = new CartTemp(id, [], id, 0)
  }

  saveProductDetails(input: any) {

    console.log("Save Product Details", typeof input)
    var productsArray = input['products'] as Array<object>
    // console.log(JSON.stringify(productsArray))
    productsArray.forEach((_, index) => {
      var product = input['products'][index]
      var suppliersArray = product['suppliers'] as Array<object>
      // console.log("SUppliers array", suppliersArray)
      var suppliers = suppliersArray.map((_, newIndex) => {
        var supplier = product['suppliers'][newIndex]
        return new SupplierTemp(supplier['id'], supplier['location'], supplier['name'], "")
      })
      var filteredSuppliers = suppliers.filter(supplier => {
        if (supplier.name == "" || supplier.id == 0 || supplier.location == "" || supplier.name == null || supplier.id == null || supplier.location == null) {
          return false
        }
        else
          return true
      })

      var productTemp = new ProductTemp(product['id'], product['name'], product['price'], filteredSuppliers, product['img_path'])
      console.log(productTemp)

    })

  }

}
