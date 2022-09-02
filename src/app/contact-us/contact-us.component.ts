import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  name: string
  phoneNumber: string
  emailAddress: string = ""

  constructor() {
    this.name = ""
    this.phoneNumber = ""
  }

  ngOnInit(): void {
  }

  OnSubmit(value: any) {
    console.log(this.name, this.phoneNumber, this.emailAddress)
    console.log(value)

  }

  PrintDetails() {
    console.log(this.name, this.phoneNumber, this.emailAddress)
  }

}
