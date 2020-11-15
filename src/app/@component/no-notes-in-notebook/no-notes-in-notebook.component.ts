import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Notebook } from 'functions/src/Notebook';

@Component({
  selector: 'app-no-notes-in-notebook',
  templateUrl: './no-notes-in-notebook.component.html',
  styleUrls: ['./no-notes-in-notebook.component.scss']
})
export class NoNotesInNotebookComponent implements OnInit {

  @Input()
  notebook: Notebook;

  @Output()
  create: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  get notebookName(): String{
    return this.notebook && 'in '+this.notebook.name +' notebook' || '';
  }

}
