import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookDetailsComponent } from './notebook-details.component';

describe('NotebookDetailsComponent', () => {
  let component: NotebookDetailsComponent;
  let fixture: ComponentFixture<NotebookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
