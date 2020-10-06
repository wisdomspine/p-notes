import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppUserToolbarCardComponent } from './app-user-toolbar-card.component';

describe('AppUserToolbarCardComponent', () => {
  let component: AppUserToolbarCardComponent;
  let fixture: ComponentFixture<AppUserToolbarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppUserToolbarCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppUserToolbarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
