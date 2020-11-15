import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNotesInNotebookComponent } from './no-notes-in-notebook.component';

describe('NoNotesInNotebookComponent', () => {
  let component: NoNotesInNotebookComponent;
  let fixture: ComponentFixture<NoNotesInNotebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoNotesInNotebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoNotesInNotebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
