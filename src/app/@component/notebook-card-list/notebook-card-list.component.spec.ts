import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotebookCardListComponent } from './notebook-card-list.component';

describe('NotebookCardListComponent', () => {
  let component: NotebookCardListComponent;
  let fixture: ComponentFixture<NotebookCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotebookCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotebookCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
