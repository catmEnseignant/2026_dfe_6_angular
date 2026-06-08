import { Routes } from '@angular/router';


export const routes: Routes = [


    {path:'',loadChildren:() => import('./public/public.routes').then(m => m.publicRoutes) },
    {path: 'administrateur', loadChildren: () => import('./administrateur/administrateur.routes').then(m => m.adminRoutes) },
  
  
];



