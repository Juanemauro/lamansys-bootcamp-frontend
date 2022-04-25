import { TestBed } from '@angular/core/testing';

import { StorydataService } from './storydata.service';

describe('StorydataService', () => {
  let service: StorydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
