import { Note } from './Note';

export class Notebook {
  id?: String;
  name?: String;
  createdAt?: String;
  updatedAt?: String;
  notes?: Note[];
  cover?: String;
  description?: String;
  link?: String;

  constructor(notebook: Notebook) {
    Object.assign(this, notebook);
  }
}
