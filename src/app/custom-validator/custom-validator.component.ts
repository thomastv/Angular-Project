import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function passwordValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return { invalidPassword: true }
  }
  else {
    return { invalidPassword: false }
  }

}


@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit {
  myForm: FormGroup
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'password': ['', Validators.compose([Validators.required, passwordValidator])]
    })

  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log(value)
  }

}
