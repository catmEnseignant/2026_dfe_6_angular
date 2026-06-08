
import { Routes } from '@angular/router';
import { PublicLayout } from '../layouts/public-layout/public-layout';
import { Auth } from './auth/auth';
import { Register } from './register/register';
import { Accueil } from '../accueil/accueil';

export const publicRoutes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: Accueil },
      { path: 'register', component: Register },
      { path: 'auth', component: Auth },
    ]
  }
];



