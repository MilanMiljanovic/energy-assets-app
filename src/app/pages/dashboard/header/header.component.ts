import { Component } from '@angular/core';
import { LogoutActionComponent } from './logout-action/logout-action.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutActionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
