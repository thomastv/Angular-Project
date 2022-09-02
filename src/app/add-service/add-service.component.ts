import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Supplier } from '../models/supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
  myForm:FormGroup;
  submitted = false;
  constructor(fb:FormBuilder,private supplierService:SupplierService) { 
      this.myForm = fb.group({
        'suppName':['',Validators.required],
        'suppId':[0],
        'suppPhone':[0]
  })
  }

  ngOnInit(): void {
  }
  get f() {
    return this.myForm.controls;
  }
  onSubmit(value:any){
    this.submitted = true;
    console.log(value);
    let supplier = new Supplier(value.suppId,value.suppName,value.suppPhone);
    this.supplierService.addSupplier(supplier);
  }
}
