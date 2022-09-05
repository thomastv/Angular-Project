import { AfterContentChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-test',
  templateUrl: './life-cycle-test.component.html',
  styleUrls: ['./life-cycle-test.component.scss']
})
export class LifeCycleTestComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterViewInit {

  @Input() testNumber: number = 0

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes", changes)
  }
  ngOnDestroy(): void {
    console.log("OnDestroy is called")
  }
  ngDoCheck(): void {
    console.log("DoCheck is called")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked is called")
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit is called")
  }

  ngOnInit(): void {
    console.log("OnInit is called")
  }

}
