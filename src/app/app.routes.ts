import { Routes } from "@angular/router";

export const routes:Routes = [
    // { path: '', redirectTo: '', pathMatch: 'full'},
    { path: '', loadChildren: () => import('./public/public.routes').then(m => m.publicRoutes)},
    { path: 'administration', loadChildren: () => import('./administrateur/admin.routes').then(m => m.adminRoutes) },
]