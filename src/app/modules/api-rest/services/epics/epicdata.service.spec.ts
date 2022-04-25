import { TestBed } from '@angular/core/testing';

import { EpicdataService } from './epicdata.service';

describe('EpicdataService', () => {
  let service: EpicdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpicdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
