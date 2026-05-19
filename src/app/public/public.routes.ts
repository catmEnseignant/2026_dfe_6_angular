import { Routes } from '@angular/router';
import { Accueil } from '../accueil/accueil';
import { PublicLayout } from '../layouts/public-layout/public-layout';
import { Auth } from './auth/auth';
import { Register } from './register/register';


export const PublicRoutes: Routes = [
  { path: '', component: PublicLayout,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: Accueil },
      { path: 'auth', component: Auth },
      { path: 'register', component: Register },
    ]},
];