import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageActionsComponent } from './app-page-actions.component';

describe('AppPageActionsComponent', () => {
  let component: AppPageActionsComponent;
  let fixture: ComponentFixture<AppPageActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPageActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
