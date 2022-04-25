import { TestBed } from '@angular/core/testing';

import { HeaderdataService } from './headerdata.service';

describe('HeaderdataService', () => {
  let service: HeaderdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
