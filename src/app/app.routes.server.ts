import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'accueil', renderMode: RenderMode.Prerender },
  { path: 'auth', renderMode: RenderMode.Prerender },
  { path: 'register', renderMode: RenderMode.Prerender },
  { path: 'administration', renderMode: RenderMode.Prerender },
  { path: 'administration/patient', renderMode: RenderMode.Prerender },
  { path: 'administration/insert-patient', renderMode: RenderMode.Prerender },
  { path: 'administration/medecin', renderMode: RenderMode.Prerender },
  { path: 'administration/insert-medecin', renderMode: RenderMode.Prerender },
  { path: 'administration/edit-patient/:id', renderMode: RenderMode.Server },
  { path: 'administration/edit-medecin/:id', renderMode: RenderMode.Server },
];
