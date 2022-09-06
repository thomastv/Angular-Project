import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";



export class CartGuard implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        var isLoggedIn = localStorage.getItem('isLoggedIn')
        console.log(isLoggedIn)
        if (isLoggedIn == 'true') {
            return true;
        }
        else {
            alert("Sorry. Unauthorized access. Please log in to continue")
            return false;
        }
    }
}