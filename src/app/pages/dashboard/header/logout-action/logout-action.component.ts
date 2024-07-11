import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-action',
  standalone: true,
  imports: [],
  templateUrl: './logout-action.component.html',
  styleUrl: './logout-action.component.css',
})
export class LogoutActionComponent {
  constructor(private router: Router) {}

  public logOut = (): void => {
    localStorage.removeItem('loggedin');
    this.router.navigate(['/login']);
  };
}
