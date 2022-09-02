import { Component, Output, OnInit } from '@angular/core';
import { BasicComponent } from './basic/basic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tismo_electronics';
  message = "Helloo basic. This is AppComponent."
  messageFromInner: string = ''

  ngOnInit(): void {



  }

  onDataAvaiable(data: any) {
    console.log(data)
    this.messageFromInner = data
  }
}
