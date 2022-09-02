import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";



export class AdminGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var role = localStorage.getItem('role')
        if (role == 'admin') {
            return true;
        }
        else {
            alert("Sorry. Unauthorized access")
            return false;
        }
    }
}