import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  custName:string;
  custPhone:number;
  custEmail:string;
  constructor() { 
    this.custName=""
    this.custPhone=0
    this.custEmail=""
  }

  ngOnInit(): void {
  }

  onSubmit(myForm:any){
    console.log(myForm)
    //myForm.cust
    this.custName = myForm.value.custName;
    this.custEmail = myForm.value.custEmail
    this.custPhone = myForm.value.custPhone
  }

}
