import { Routes } from '@angular/router';
import { Patient } from './patients/patients';
import { FormPatient } from './form-patients/form-patients';

export const routes: Routes = [
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'patient', component: Patient },
  { path: 'formulaire', component: FormPatient }

];