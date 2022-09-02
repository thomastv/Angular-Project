import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input() msg:string="initial"
  @Output() msgFromInner:EventEmitter<string>
  constructor() { 
    this.msgFromInner = new EventEmitter<string>
  }

  ngOnInit(): void {
    let ee = new EventEmitter();
    ee.subscribe((name:string)=>console.log(`Hello ${name}`));
    ee.emit("Thomas");
  }
  emitEvent(){
    this.msgFromInner.emit("Hello from inner component .. basic")
  }

}
