import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewObjectComponent } from './app-new-object.component';

describe('AppNewObjectComponent', () => {
  let component: AppNewObjectComponent;
  let fixture: ComponentFixture<AppNewObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppNewObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNewObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
