import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';

export const routes: Routes = [
    {path: '', redirectTo: 'patient', pathMatch: 'full'},
    {path: 'patient', component: Patient},
    {path: 'form-patient', component: FormPatient},
    
];