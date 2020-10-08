import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Notebook } from 'src/app/@core/models/Notebook';
import { NotesComponent } from 'src/app/@private/notes/notes.component';

@Component({
  selector: 'app-notebook-card',
  templateUrl: './notebook-card.component.html',
  styleUrls: ['./notebook-card.component.scss'],
})
export class NotebookCardComponent implements OnInit {
  @Input()
  notebook: Notebook;

  @Output('details')
  detailsClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output('settings')
  settingsClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output('delete')
  onDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  get cover() {
    return this.sanitizer.bypassSecurityTrustStyle(
      `url(${this.notebook.cover})`
    );
  }

  get query() {
    return { notebook: this.notebook.id };
  }
}
