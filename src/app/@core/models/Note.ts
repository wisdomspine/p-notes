import { Notebook } from './Notebook';
import { NoteContent } from './NoteContent';

export class Note {
  id?: String;
  key?: number;
  createdAt?: String;
  updatedAt?: String;
  link?: String;
  notebook?: Notebook;
  title?: string;
  characters?: number = 0;
  words?: number = 0;
  description?: String;
  cover?: String;
  coverFile?: Blob;
  content?: NoteContent;
  contentId?:String;
  constructor(note: Note) {
    Object.assign(this, note);
  }

  static compareWith(note1: Note, note2: Note): boolean {
    return note1 && note2 && note1.id == note2.id;
  }
}
