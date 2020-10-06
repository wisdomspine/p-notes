import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchInputFieldComponent } from './app-search-input-field.component';

describe('AppSearchInputFieldComponent', () => {
  let component: AppSearchInputFieldComponent;
  let fixture: ComponentFixture<AppSearchInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
