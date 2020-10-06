import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMobileSearchComponent } from './app-mobile-search.component';

describe('AppMobileSearchComponent', () => {
  let component: AppMobileSearchComponent;
  let fixture: ComponentFixture<AppMobileSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMobileSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMobileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
