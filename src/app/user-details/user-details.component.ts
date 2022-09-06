import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User | undefined
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private userService:UserService) {
    
   }

   ngOnInit(): void {
    this.activatedRoute.params.subscribe((param: Params) => {
      console.log(param)
      let id = param['id']
      console.log(id)
      this.userService.getUserByIdHttp(id).subscribe(cuser => {
        this.user = cuser
        
      })

    })
  }
}
