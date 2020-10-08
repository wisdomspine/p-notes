import { Notebook } from './Notebook';

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
  constructor(note: Note) {
    Object.assign(this, note);
  }
}
