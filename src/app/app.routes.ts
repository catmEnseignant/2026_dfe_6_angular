import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-Patient/form-Patient';

export const routes: Routes = [
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'patient', component: Patient },
  { path: 'formPatient', component: FormPatient }, // ✅ corrigé
];