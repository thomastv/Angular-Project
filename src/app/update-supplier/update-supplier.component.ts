import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.scss']
})
export class UpdateSupplierComponent implements OnInit {

  myForm: FormGroup
  submitted = false
  selectedSupplier: Supplier | undefined


  suppliersList: Supplier[] = []


  constructor(private supplierService: SupplierService, fb: FormBuilder) {
    this.supplierService.getSuppliersHttp().subscribe(data => {
      this.suppliersList = data
      this.selectedSupplier = this.suppliersList[0]
    });
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'id': [0, Validators.required],
      'location': ['', Validators.required],
    })

  }

  get f() { return this.myForm.controls }

  ngOnInit(): void {
  }

  onChangeType(event: any) {
    console.log(event.target.value)
    var newId = parseInt(event.target.value.split(':')[1].trim())
    console.log(newId)
    this.selectedSupplier = this.suppliersList.find(product => product.id == newId)!
    this.myForm.get('id')?.setValue(this.selectedSupplier.id)
    this.myForm.get('name')?.setValue(this.selectedSupplier.name)
    this.myForm.get('location')?.setValue(this.selectedSupplier.location)
  }

  updateSupplier() {
    // this.supplierService.updateSupplier(this.selectedSupplier!, this.myForm.value.id, this.myForm.value.name, this.myForm.value.location);
    // document.getElementById('updateSupplierModalButton')?.click()

    this.supplierService.updateSupplierHttp(this.selectedSupplier!, this.myForm.value.id, this.myForm.value.name, this.myForm.value.location).subscribe(data => {
      console.log("updated" , data)
    });
    document.getElementById('updateSupplierModalButton')?.click()
  }


}
