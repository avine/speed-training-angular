import { InjectionToken, ValueProvider } from '@angular/core';

export const APP_TITLE = new InjectionToken<string>('app title');

export const appTitleProvider: ValueProvider = {
  provide: APP_TITLE,
  useValue: 'The app title',
};
