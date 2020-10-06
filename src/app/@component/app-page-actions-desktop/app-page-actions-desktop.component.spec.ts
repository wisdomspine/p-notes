import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageActionsDesktopComponent } from './app-page-actions-desktop.component';

describe('AppPageActionsDesktopComponent', () => {
  let component: AppPageActionsDesktopComponent;
  let fixture: ComponentFixture<AppPageActionsDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPageActionsDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageActionsDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
