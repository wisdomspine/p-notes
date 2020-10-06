import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMobileToolbarComponent } from './app-mobile-toolbar.component';

describe('AppMobileToolbarComponent', () => {
  let component: AppMobileToolbarComponent;
  let fixture: ComponentFixture<AppMobileToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMobileToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMobileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
