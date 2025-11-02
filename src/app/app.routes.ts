import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/components/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUTES
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/login/login').then((m) => m.LoginComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
