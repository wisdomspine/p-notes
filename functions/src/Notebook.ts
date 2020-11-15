import { firestore } from "firebase-admin";

export class Notebook {
  key?: number;
  name?: String;
  notesCount?: number;
  cover?: String;
  description?: String;
  link?: String;
  permanent?: boolean;
  id?: String;
  createdAt?: String | firestore.FieldValue;
  updatedAt?: String | firestore.FieldValue;

  constructor(notebook: Notebook) {
    Object.assign(this, notebook);
  }

//   toJSON? = ()=>{
//       return JSON.stringify(this);
//   }
}
