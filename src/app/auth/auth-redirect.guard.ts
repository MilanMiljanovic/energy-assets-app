import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate = (): boolean => {
    if (localStorage.getItem('loggedin')) {
      this.router.navigate(['/']);
    }
    return true;
  };
}
