import { TestBed } from '@angular/core/testing';

import { BanksDataService } from './banks-data.service';

describe('BanksDataService', () => {
  let service: BanksDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanksDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
