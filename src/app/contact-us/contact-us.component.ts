import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


function phoneValidator(control: FormControl): { [s: string]: boolean } | null {
  if (!(control.value.length == 10)) {
    return { invalidPhone: true }
  }
  else {
    return null
  }
}
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup
  error: String;
  submitted = false;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'name': ['', Validators.required],
      'phoneNumber': ['', Validators.compose([Validators.required, phoneValidator])],
      'emailAddress': ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      'feedback': ['', Validators.required]
    })
    this.error = "Phone Number is REQUIRED"
  }

  ngOnInit(): void {
  }

  OnSubmit(value: any) {
    this.submitted = true;

    if (this.myForm.invalid) {
      console.log("Invalid")
    }
    else {
      console.log(value)
      this.myForm.get('name')?.setValue("")
      this.myForm.get('phoneNumber')?.setValue("")
      this.myForm.get('emailAddress')?.setValue("")
      this.myForm.get('feedback')?.setValue('')
      this.submitted = false
    }

    //this.submitted = false
    // this.myForm.reset()


  }

  get f() { return this.myForm.controls }

}