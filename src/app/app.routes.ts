import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';
import { Medecin } from './medecin/medecin';
import { FormMedecin } from './form-medecin/form-medecin';


export const routes: Routes = [
  { path: '', redirectTo: 'patient', pathMatch: 'full' },
  { path: 'patient', component: Patient },
  { path: 'form-patient', component: FormPatient },
  { path: 'edit-patient/:id', component: FormPatient },
  { path: 'delete-patient/:id', component: FormPatient },
  { path: 'medecin', component: Medecin },
  { path: 'form-medecin', component: FormMedecin },
  { path: 'edit-medecin/:id', component: FormMedecin }
];