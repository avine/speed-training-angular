import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

registerLocaleData(localeFr); // <-- Defines how to format currency, date, ... in french

const i18nProviders = [
  { provide: LOCALE_ID, useValue: 'fr' },
  { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), i18nProviders],
};
