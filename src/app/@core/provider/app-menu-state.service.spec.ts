import { TestBed } from '@angular/core/testing';

import { AppMenuStateService } from './app-menu-state.service';

describe('AppMenuStateService', () => {
  let service: AppMenuStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppMenuStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
