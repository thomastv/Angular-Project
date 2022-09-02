import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tismo';
  msgFromApp="Hello basic ... from outer!!!"
  msgFrInn="Initial"
  name = new FormControl('');
  ngOnInit(){

  }
  getMsgFromInner(){
  
  }
  messageReceived(evt:any){
    console.log(evt)
    this.msgFrInn = evt;
  }
}
