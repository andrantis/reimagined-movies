import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { APP_CONFIG, ConfigService } from './config.service';

// Keeping this "testing module" for easy testing
@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: {
        omdb: {
          url: '',
          key: '',
        },
      },
    },
    ConfigService,
  ],
})
export class ConfigTestingModule {}
