import { TestBed } from '@angular/core/testing';

import { ConductReviewService } from './conduct-review.service';

describe('ConductReviewService', () => {
  let service: ConductReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConductReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
