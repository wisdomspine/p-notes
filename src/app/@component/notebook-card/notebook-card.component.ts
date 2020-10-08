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
  notebook: Notebook = new Notebook({
    id: '1',
    name: 'The agony of Tom Sawyer',
    link: `/${NotesComponent.route}/`,
    cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
    description: 'The agony of Tom Sawyer',
  });

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
