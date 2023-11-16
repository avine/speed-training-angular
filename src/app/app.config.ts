import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { appTitleProvider } from './app.providers';
import { routes } from './app.routes';

/*
const dataServiceProvider: FactoryProvider = {
  provide: DataService,
  useFactory: (router: Router) => {
    return new DataService(router);
  },
  deps: [Router],
};
*/

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), appTitleProvider],
};
