import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUtils } from '../utility/auth-utils';

@Injectable({
  providedIn: 'root'
})
export class NonadminGuard implements CanActivate {
  constructor(private router:Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(AuthUtils.getUserType()=="customer"){
        return true
      }else{
        this.router.navigate(['adminpage'])
        return false
      }
    }
  
}
