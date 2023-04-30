import { TestBed } from '@angular/core/testing';

import { PathologyServiceService } from './pathology-service.service';

describe('PathologyServiceService', () => {
  let service: PathologyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PathologyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
