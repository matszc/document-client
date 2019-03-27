import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../services/auth.service';




@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            return true;
        }

        this.router.navigate(['/sign-in'] );
        return false;
    }
/*    canLoad(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const currentUser = this.authenticationService.currentUserValue;
      if (!currentUser) {
        this.router.navigate(['/home'] );
        return false;
      }

      return true;
    }*/
}
