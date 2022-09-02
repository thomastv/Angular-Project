import { CanActivate } from "@angular/router";

var role = "admin"
//var role = localStorage/getItem('role')

export class AdminGuard implements CanActivate{
    canActivate(){
        if(role=="admin")
            return true;
        else{
            alert("Sorry, No Access only for admins");
            return false;
        }
    }
}