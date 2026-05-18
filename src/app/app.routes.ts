import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [
    {path: '', loadChildren: () => import('./public/public.routes').then(m => m.publicRoutes) },
    {path: 'administration', loadChildren: () => import('./administrateur/administration.routes').then(m => m.AdministrateurRoutes)},
=======
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';
import { gzip } from 'zlib';

export const routes: Routes = [
    { path: '', redirectTo: 'patient', pathMatch: 'full' },
    { path: 'patient', component: Patient },
    { path: 'direction', component: FormPatient },
    { path: 'form-patient', component: FormPatient },
    { path: 'edit-patient/:id', component: FormPatient }
>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
];