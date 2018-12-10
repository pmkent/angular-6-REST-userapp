import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router/src/router_state';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  // Check if the user is logged in before calling http
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    this.router.navigate(
      ['/login'],
      {
        queryParams: { returnUrl: state.url }
      }
    );
  }
}
