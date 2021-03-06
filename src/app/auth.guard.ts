import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (localStorage.getItem("access_token")){
        // Token from the LogIn is avaiable, so the user can pass to the route
        return true
      } else  {
        // Token from the LogIn is not avaible because something went wrong or the user wants to go over the url to the site
        // Hands the user to the LogIn page 
        alert("You are currently not logged in, please provide Login!")
        this.router.navigate( ["/login"] );
        return false

      }
  }
  
}
