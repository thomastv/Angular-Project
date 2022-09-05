import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../helper/must-match.validator';

// function suppPassCheck(control1:FormControl,control2:FormControl): {[s:string]: boolean} | null{
//   if(!(control1.value == control2.value)){
//     return {invalidSupp: true};
//   }
//   else
//     return null;
// }
function suppValidator(control:FormControl): {[s:string]: boolean} | null{
  if(!control.value.match(/^123/)){
    return {invalidSupp: true};
  }
  else
    return null;
}
@Component({
  selector: 'app-custom-validator',
  templateUrl: './custom-validator.component.html',
  styleUrls: ['./custom-validator.component.scss']
})
export class CustomValidatorComponent implements OnInit {
  myForm:FormGroup;
  submitted = false;
  suppName: AbstractControl;
  confirmSupp: AbstractControl;
  constructor(fb:FormBuilder) {
    this.myForm = fb.group({
      'suppName': ['',Validators.compose([
        Validators.required,
        suppValidator
      ])],
      'confirmSupp': ['',Validators.required]
      },
      {
        validator: MustMatch('suppName','confirmSupp')
      }
    )
    this.confirmSupp = this.myForm.controls['confirmSupp']
    this.suppName =this.myForm.controls['suppName']
   }

  ngOnInit(): void {
  }
  get f() {
    return this.myForm.controls;
  }
  onSubmit(value:string):void{
      console.log(this.suppName.errors);
  }
}
