import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from '../models/Note';
import { Notebook } from '../models/Notebook';
import { NoteService } from './note.service';
import { NotebookService } from './notebook.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private noteService: NoteService,
    private notebookService: NotebookService,
  ) {}

  search(param?:{search?: string, notebooks?:boolean, notes?:boolean}): Observable< (Note | Notebook)[] >{
    param = param || {};
    param.search = param.search || '';
    if(param.notebooks == null) param.notebooks = true;
    if(param.notes == null) param.notes = true;

    const observables: (Observable<Notebook[]> | Observable<Note[]>)[]= [];
    if(param.notebooks) observables.push(this.notebookService.notebooks(param.search));
    if(param.notes) observables.push(this.noteService.notes({search:param.search}));

    return combineLatest(observables).pipe(map(data => {
      const result: (Notebook | Note)[] = [];
      data.forEach(seg => {
        result.push(...seg);
      });

      // sort by title and name
      result.sort((a, b) => {
        let str1 = (a instanceof Notebook)? (a as Notebook).name : (a as Note).title;
        let str2 = (b instanceof Notebook)? (b as Notebook).name : (b as Note).title;
        return `${str1 || ''}` < `${str2 || ''}`? -1 : 1;
      });

      // sort by description

      result.sort((a, b) => {
        return `${a.description || ''}` < `${b.description || ''}`? -1 : 1;
      });

      result.forEach((r, i) => {
        r.key = i;
      });
      return result;

    }))
  }
}
