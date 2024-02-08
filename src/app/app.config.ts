import { ApplicationConfig } from '@angular/core';
import { provideDesignAngularKit } from 'design-angular-kit';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(), // Necessario per il funzionamento della libreria
    provideHttpClient(), // Necessario per il funzionamento della libreria
    provideDesignAngularKit(),
  ]
};
