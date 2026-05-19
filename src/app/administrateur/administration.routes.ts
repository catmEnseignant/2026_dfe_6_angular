import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './form-patient/form-patient';
import { Medecin } from './medecin/medecin';
import { FormMedecin } from './form-medecin/form-medecin';
import { AdminLayout } from '../layouts/administrations/admin-layout/admin-layout';

export const AdministrateurRoutes: Routes = [
  { path: '', component: AdminLayout,
    children: [
      { path: '', redirectTo: 'patient', pathMatch: 'full' },
      { path: 'patient', component: Patient },
      { path: 'insert-patient', component: FormPatient },
      { path: 'edit-patient/:id', component: FormPatient },
      { path: 'medecin', component: Medecin },
      { path: 'insert-medecin', component: FormMedecin },
      { path: 'edit-medecin/:id', component: FormMedecin },
    ]},
];      
  