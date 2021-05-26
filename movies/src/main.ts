import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_CONFIG } from './app/services/config.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// fetch config.json file (it could also be an api call)
// populate injection tokens with the json data that was read
// by providing the injection tokens with a value they can be used in a service
// all this will happen before starting the bootstraping of appmodule
fetch('config.json')
  .then(response => response.json())
  .then(json => {
    platformBrowserDynamic([
      { provide: APP_CONFIG, useValue: json },
    ])
      .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
