import { Inject, Injectable, InjectionToken } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig) {}

  getConfig() {
    return this.appConfig;
  }
}

// used in main.ts as injection token for the config service
export const APP_CONFIG = new InjectionToken<string>('APP_CONFIG');

export type AppConfig = {
  version: string;
  environment: string;
  omdb: {
    url: string;
    key: string;
  };
};
