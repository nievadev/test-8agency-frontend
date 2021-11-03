import { TestBed } from '@angular/core/testing';

import { CountryDataStoreService } from './country-data-store.service';

describe('CountryDataStoreService', () => {
  let service: CountryDataStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryDataStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
