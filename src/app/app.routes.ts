import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import {  FromPatient } from './from-patient/from-patient';

export const routes: Routes = [
    {path:'', redirectTo: 'patient', pathMatch:'full'},
    {path: 'patient',component:Patient},
    {path: 'direction', component:FromPatient},
];

