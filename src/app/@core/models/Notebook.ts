import { Note } from './Note';

export class Notebook {
  key?: number;
  name?: String;
  createdAt?: String;
  updatedAt?: String;
  notes?: Note[];
  notesCount?: number;
  cover?: String;
  description?: String;
  link?: String;
  permanent?: boolean;
  id?: String;
  coverFile?: Blob;

  constructor(notebook: Notebook) {
    Object.assign(this, notebook);
  }
}
