import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';
import { gzip } from 'zlib';

export const routes: Routes = [
    {path: '', redirectTo: 'patient', pathMatch: 'full' },
    {path: 'patient', component: Patient},
    {path: 'direction', component: FormPatient},
    {path: 'form-patient', component: FormPatient}
];
