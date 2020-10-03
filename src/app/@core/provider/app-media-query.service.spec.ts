import { TestBed } from '@angular/core/testing';

import { AppMediaQueryService } from './app-media-query.service';

describe('AppMediaQueryService', () => {
  let service: AppMediaQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMediaQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
