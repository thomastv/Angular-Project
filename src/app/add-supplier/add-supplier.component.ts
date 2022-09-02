import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.scss']
})
export class AddSupplierComponent implements OnInit {

  myForm: FormGroup
  submitted = false

  constructor(private supplierService: SupplierService, fb: FormBuilder) {

    this.myForm = fb.group({
      'name': ['', Validators.required],
      'id': [0, Validators.required],
      'location': ['', Validators.required],
    })


  }

  ngOnInit(): void {
  }

  get f() { return this.myForm.controls }

  AddSupplier() {
    this.submitted = true
    if (this.myForm.invalid) {
      console.log("Invalid")
    }
    else {
      this.supplierService.addSupplier(this.myForm.value.id, this.myForm.value.location, this.myForm.value.name)
    }
  }

}
