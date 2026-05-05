import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import {  FormPatient } from './from-patient/from-patient';

export const routes: Routes = [
    {path:'', redirectTo: 'patient', pathMatch:'full'},
    {path: 'patient',component:Patient},
    {path: 'direction', component:FormPatient},
    {path: 'from-patient', component:FormPatient},
    {path: 'edit-patient/:id', component:FormPatient},




];

