import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAppreciationComponent } from './review-appreciation.component';

describe('ReviewAppreciationComponent', () => {
  let component: ReviewAppreciationComponent;
  let fixture: ComponentFixture<ReviewAppreciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAppreciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAppreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
