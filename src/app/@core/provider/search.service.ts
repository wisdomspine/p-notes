import { Injectable } from '@angular/core';
import { NotesComponent } from 'src/app/@private/notes/notes.component';
import { Note } from '../models/Note';
import { Notebook } from '../models/Notebook';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  search(): (Note | Notebook)[] {
    const notes = Array(10)
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
        n.key = 0 - i;
        n.id = `${i}`;
        return n;
      });

    const notebooks = Array(10)
      .fill(
        new Notebook({
          name: 'The agony of Tom Sawyer',
          link: `/${NotesComponent.route}/`,
          cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
          description: 'The agony of Tom Sawyer',
        })
      )
      .map(function (n, i) {
        n.key = i;
        n.id = `${i}`;
        return n;
      });

    return [...notebooks, ...notes];
  }
}
