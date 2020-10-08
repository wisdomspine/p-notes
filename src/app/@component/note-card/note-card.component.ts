import { not } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { NotesComponent } from 'src/app/@private/notes/notes.component';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input()
  note: Note = new Note({
    id: 'guy',
    key: 24,
    createdAt: '',
    updatedAt: '',
    link: `${NotesComponent.route}/guy`,
    notebook: new Notebook({}),
    title: 'Chapter 1',
    characters: 0,
    words: 0,
    description: '',
    cover:
      'https://images.unsplash.com/photo-1585108592681-d0db82bab204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
  });

  @Output('details')
  detailsClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output('settings')
  settingsClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output('delete')
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  @Output('print')
  onPrint: EventEmitter<any> = new EventEmitter<any>();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  get cover() {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${this.note.cover})`);
  }
}
