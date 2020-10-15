import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNotebookDialogComponent } from './delete-notebook-dialog.component';

describe('DeleteNotebookDialogComponent', () => {
  let component: DeleteNotebookDialogComponent;
  let fixture: ComponentFixture<DeleteNotebookDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNotebookDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNotebookDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
