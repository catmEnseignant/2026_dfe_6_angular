import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';
import path from 'path';


export const routes: Routes = [
    {path: "", redirectTo: "patient", pathMatch: "full"},
    {path: "patient", component: Patient},
    {path: "Form-Patient", component: FormPatient},
];
