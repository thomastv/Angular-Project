import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashborard',
  templateUrl: './user-dashborard.component.html',
  styleUrls: ['./user-dashborard.component.scss']
})
export class UserDashborardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeDefault(){
    let para = document.getElementById("defaultAdd");
    para!.innerText = "T2-1A, Millennium City IT Park Salt Lake, Sector V Kolkata, 700091 India"
  }

}
