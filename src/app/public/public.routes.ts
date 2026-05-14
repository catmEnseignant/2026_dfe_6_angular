import { Routes } from '@angular/router';
import { Accueil } from '../accueil/accueil';
import { PublicLayout } from '../layouts/public-layout/public-layout';
import { Auth } from './auth/auth';
import { Register } from './register/register';
import { Fonctionnalites } from './fonctionnalites/fonctionnalites';

export const publicRoutes: Routes = [
    { path: '', component: PublicLayout, 
        children: [
            { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
            { path: 'acceuil', component: Accueil},
            { path: 'auth', component: Auth},
            { path: 'register', component: Register},
            { path: 'fonctionnalites', component: Fonctionnalites}
        ]
    },
];
