import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthRedirectGuard } from './auth/auth-redirect.guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Log in',
    canActivate: [AuthRedirectGuard],
  },
  {
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [AuthGuard],
  },
];
