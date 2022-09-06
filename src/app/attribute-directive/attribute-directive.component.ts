import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {

  color: string = ""
  isBordered: boolean = false
  classesObj = {
    bordered: false
  }
  constructor() {

    this.color = 'green'
  }

  ngOnInit(): void {
  }
  toggleBorder() {
    this.isBordered = !this.isBordered
    this.classesObj = { bordered: this.isBordered }
  }

}
