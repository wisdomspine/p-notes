import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageActionsMobileComponent } from './app-page-actions-mobile.component';

describe('AppPageActionsMobileComponent', () => {
  let component: AppPageActionsMobileComponent;
  let fixture: ComponentFixture<AppPageActionsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPageActionsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageActionsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
