import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  @Output() ee: EventEmitter<string>;
  @Input() msg: string = "Initial"



  constructor() {
    this.ee = new EventEmitter<string>();
  }

  ngOnInit(): void {

    // this.ee.subscribe((name) => {
    //   console.log(name)
    // })
    // this.ee.emit('Mushthaq')
    // this.ee.emit("HELLOO")


  }

  emitEvent() {
    this.ee.emit("Hello from the other side")

  }




}
