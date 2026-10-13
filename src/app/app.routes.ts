// import { Routes } from '@angular/router';
// export const routes: Routes = [
//   { path: '', pathMatch: 'full', redirectTo: 'login' },
//   { path: 'login', title: 'Sign in | CONNECT', loadComponent: () => import('./features/login/login').then(m => m.Login) },
//   {
//     path: 'app', loadComponent: () => import('./layouts/landing-layout/landing-layout').then(m => m.LandingLayout), children: [
//       { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
//       { path: 'dashboard', title: 'Dashboard | CONNECT', loadComponent: () => import('./features/dashboard/dashboard').then(m => m.Dashboard) },
//       ...['analytics', 'processes', 'transitions', 'tickets', 'file-manager', 'billing', 'teams', 'performance-score', 'settings'].map(path => ({ path, title: path.replaceAll('-', ' ') + ' | CONNECT', loadComponent: () => import('./features/placeholder/placeholder').then(m => m.Placeholder) }))
//     ]
//   },
//   { path: '**', redirectTo: 'login' }
// ];



import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login').then(m => m.Login)
  },
  {
    path: 'app',
    loadComponent: () =>
      import('./layouts/landing-layout/landing-layout')
        .then(m => m.LandingLayout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      ...[
        'analytics',
        'processes',
        'transitions',
        'tickets',
        'file-manager',
        'billing',
        'teams',
        'performance-score',
        'settings'
      ].map(path => ({
        path,
        loadComponent: () =>
          import('./features/placeholder/placeholder')
            .then(m => m.Placeholder)
      }))
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
