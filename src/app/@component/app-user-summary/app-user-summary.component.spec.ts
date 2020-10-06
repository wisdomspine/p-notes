import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserSummaryComponent } from './app-user-summary.component';

describe('AppUserSummaryComponent', () => {
  let component: AppUserSummaryComponent;
  let fixture: ComponentFixture<AppUserSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
