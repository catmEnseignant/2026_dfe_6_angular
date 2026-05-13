
import { Routes } from '@angular/router';
import { Acceuil } from '../acceuil/acceuil';
import { PublicLayout } from '../layout/public-layout/public-layout';
import { Register } from './register/register';
import { Auth } from './auth/auth';




export const publicRoutes: Routes = [
   
    {path:'',component:PublicLayout,
        children:[
            {path:' ',redirectTo:'acceuil',pathMatch:'full'},
            {path:'acceuil',component:Acceuil},
            {path:'auth',component:Auth},
            {path:'register',component:Register},
            

        ]
    }
    
];
