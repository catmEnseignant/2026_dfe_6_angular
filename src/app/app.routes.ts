import { Routes } from '@angular/router';
import { PatientComponent } from './patient/patient.component';
import { FormPatientComponent } from './form-patient/form-patient.component';

export const routes: Routes = [
    {path: '', redirectTo: 'patientComponent', pathMatch: 'full'},
    {path: 'patientComponent', component :PatientComponent},
    {path: 'Formulaire', component :FormPatientComponent}
];
