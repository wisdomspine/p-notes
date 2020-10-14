import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchFailedComponent } from './app-search-failed.component';

describe('AppSearchFailedComponent', () => {
  let component: AppSearchFailedComponent;
  let fixture: ComponentFixture<AppSearchFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
