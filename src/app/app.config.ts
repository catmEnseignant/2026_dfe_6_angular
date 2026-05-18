import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
<<<<<<< HEAD
=======
import { provideHttpClientTesting } from '@angular/common/http/testing';
>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient()
=======
    provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(),

>>>>>>> c32d3e2a57c68826cf651a6a275aa59833059823
  ]
};
