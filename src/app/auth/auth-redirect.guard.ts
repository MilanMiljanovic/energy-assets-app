import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { checkUserStatus } from '../utils/checkUserStatus.util';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate = (): boolean => {
    if (checkUserStatus()) {
      this.router.navigate(['/']);
    }
    return true;
  };
}
