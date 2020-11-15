import { DocumentChangeAction } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { NotesComponentRouteName } from 'src/app/route-names';
import { Note } from './Note';

export class Notebook {
  static defaultCover:String = 'https://firebasestorage.googleapis.com/v0/b/p-notes-a0a79.appspot.com/o/default%2Fdefault%20notebook%20cover.jpeg?alt=media&token=4294c47b-d9c1-49c1-bbdd-85a6ded10a80';
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
  static defaultId: String = 'default';

  constructor(notebook: Partial<Notebook>) {
    Object.assign(this, notebook);
  }

  toObject(param?:{create?: boolean, update?: boolean}): object{
    const result:any=  {
      name: this.name+'', 
      cover: `${this.cover || Notebook.defaultCover}`,
      description: `${this.description || ''}`,
      link: `${this.link || ''}`,
      permanent: this.permanent || false,
    };
    if(param.create)result.createdAt =  firebase.firestore.FieldValue.serverTimestamp()
    else if(param.create == null) result.createdAt = this.createdAt+''; 

    if(param.update)result.updatedAt =  firebase.firestore.FieldValue.serverTimestamp()
    else if(param.create == null) result.updatedAt = this.updatedAt+''; 
    return result;
  }

  static fromObject(notebook: Notebook): Notebook{
    return new Notebook(notebook);
  }
  
  static fromDocumentSnapshot(snapshot: DocumentChangeAction<Notebook>): Notebook{
    // creates a notebook object from a document snapshot
    const data = snapshot.payload.doc.data();
    let createdAt:any = (data.createdAt as any as firebase.firestore.Timestamp);
    createdAt = createdAt && createdAt.toDate().toLocaleString();
    
    let updatedAt:any = (data.updatedAt as any as firebase.firestore.Timestamp);
    updatedAt = updatedAt && updatedAt.toDate().toLocaleString();
    
    return new Notebook({
      ...data,
      createdAt: createdAt,
      updatedAt: updatedAt,
      id: snapshot.payload.doc.id,
      link: `/${NotesComponentRouteName}/`,
    });
  }

}
