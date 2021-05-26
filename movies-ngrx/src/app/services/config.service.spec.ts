import { TestBed } from '@angular/core/testing';
import { ConfigTestingModule } from './config-testing.module';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigTestingModule],
    });
    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
