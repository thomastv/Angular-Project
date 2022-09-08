import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
  str = "JavaScript";
  constructor() { }
  birthday = new Date(1999,5,25);
  toggle = true;
  get format(){
    return this.toggle ? `shortDate` : `fullDate`;
  }

  toggleFormat(){
    this.toggle = !this.toggle;
  }
  ngOnInit(): void {
  }

}
