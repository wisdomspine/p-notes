
export class Notebook {
  key?: number;
  name?: String;
  notesCount?: number;
  cover?: String;
  description?: String;
  link?: String;
  permanent?: boolean;
  id?: String;

  constructor(notebook: Notebook) {
    Object.assign(this, notebook);
  }
}
