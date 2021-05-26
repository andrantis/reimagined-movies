import { TestBed } from '@angular/core/testing';
import { ConfigTestingModule } from './config-testing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { OmdbService } from './omdb.service';

describe('OmdbService', () => {
  let service: OmdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfigTestingModule, HttpClientTestingModule],
    });
    service = TestBed.inject(OmdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
