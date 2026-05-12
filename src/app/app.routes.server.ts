import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'patient', renderMode: RenderMode.Prerender },
  { path: 'insert-patient', renderMode: RenderMode.Prerender },
  { path: 'medecin', renderMode: RenderMode.Prerender },
  { path: 'insert-medecin', renderMode: RenderMode.Prerender },
  { path: 'edit-patient/:id', renderMode: RenderMode.Server },
  { path: 'edit-medecin/:id', renderMode: RenderMode.Server },
];
