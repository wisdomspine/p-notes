import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCardListComponent } from './note-card-list.component';

describe('NoteCardListComponent', () => {
  let component: NoteCardListComponent;
  let fixture: ComponentFixture<NoteCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteCardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
