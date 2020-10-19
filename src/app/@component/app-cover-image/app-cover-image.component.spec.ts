import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoverImageComponent } from './app-cover-image.component';

describe('AppCoverImageComponent', () => {
  let component: AppCoverImageComponent;
  let fixture: ComponentFixture<AppCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCoverImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
