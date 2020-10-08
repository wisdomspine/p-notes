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
  note: Note;

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
