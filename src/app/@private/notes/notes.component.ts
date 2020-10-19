import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { NoteService } from 'src/app/@core/provider/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  static routeName: string = 'notes';
  static route: String = `notes`;
  constructor(
    private dialogService: AppDialogService,
    public noteService: NoteService,
  ) {}

  ngOnInit(): void {}

  get notes(): Note[] {
    return Array(100)
      .fill(
        new Note({
          id: 'guy',
          key: 24,
          createdAt: '',
          updatedAt: '',
          link: `/${NotesComponent.route}/guy`,
          notebook: new Notebook({}),
          title: 'Chapter 1',
          characters: 0,
          words: 0,
          description: '',
          cover:
            'https://images.unsplash.com/photo-1585108592681-d0db82bab204?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        })
      )
      .map(function (n, i) {
        n.key = i;
        n.id = `${i}`;
        return n;
      });
  }

  get showActions(): boolean {
    return true;
  }

  get title(): String {
    return 'The agony of Tom Sawyer';
  }

  get canDeleteNotebook(): boolean {
    return true;
  }

  handleDelete(index: number) {
    this.dialogService.confirmNoteDelete().subscribe(console.log);
  }
}
