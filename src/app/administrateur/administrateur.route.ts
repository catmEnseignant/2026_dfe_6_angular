import { Routes } from '@angular/router';
import { Patient } from './patient/patient';
import { FormPatient } from './formpatient/form-patient';
import { Medecin } from './medecin/medecin';
import { FormMedecin } from './formmedecin/form-medecin';
import { AdminLayout } from '../layout/administration/admin-layout/admin-layout';

export const administrateurRoutes: Routes = [
    {path:'',component: AdminLayout,
        children:[
            {path:'',redirectTo:'patient',pathMatch:'full'},
            {path:'patient',component:Patient},
            {path:'medecin',component:Medecin},
            {path:'direction',component:FormPatient},
            {path:'form-patient',component:FormPatient},
            {path:'edit-patient/:id',component:FormPatient},
            {path:'delete-patient/:id',component:Patient},
            {path:'form-medecin',component:FormMedecin},
            {path:'edit-medecin/:id',component:FormMedecin},
            {path:'delete-medecin/:id',component:Medecin}
        ]
    }
  
];
