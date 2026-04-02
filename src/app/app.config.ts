import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { Patient } from './patient/patient';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()) ,
    provideHttpClient() , // configure le client HTTP pour l'application Angular,permettant ainsi de faire des requêtes HTTP vers des API ou des serveurs.
    Patient
    
  ]
};
