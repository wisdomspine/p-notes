import { DocumentChangeAction } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { NoteComponentRouteName } from 'src/app/route-names';
import { Notebook } from './Notebook';
import { NoteContent } from './NoteContent';

export class Note {
  static defaultCover:String = 'https://firebasestorage.googleapis.com/v0/b/p-notes-a0a79.appspot.com/o/default%2Fdefault%20note.jpeg?alt=media&token=3e6642b3-7418-4776-a1f3-5ba709288111';
  id?: String;
  key?: number;
  createdAt?: String;
  updatedAt?: String;
  link?: String;
  notebook?: Notebook;
  notebookId?: String;
  title?: string;
  description?: String;
  cover?: String;
  coverFile?: Blob;
  content?: NoteContent;
  contentId?:String;
  constructor(note: Partial<Note>) {
    Object.assign(this, note);
  }

  static compareWith(note1: Note, note2: Note): boolean {
    return note1 && note2 && note1.id == note2.id;
  }

  toObject(param?:{create?: boolean, update?: boolean}): object{
    const result:any=  {
      title: this.title+'', 
      cover: `${this.cover || Notebook.defaultCover}`,
      description: `${this.description || ''}`,
      link: `${this.link || ''}`,
      notebookId: `${(this.notebook && this.notebook.id) ||this.notebookId || Notebook.defaultId}`,
      contentId: `${this.contentId || ''}`,
      
    };
    if(param.create)result.createdAt =  firebase.firestore.FieldValue.serverTimestamp()
    else if(param.create == null) result.createdAt = this.createdAt+''; 

    if(param.update)result.updatedAt =  firebase.firestore.FieldValue.serverTimestamp()
    else if(param.create == null) result.updatedAt = this.updatedAt+''; 
    return result;
  }  

  static fromDocumentSnapshot(snapshot: DocumentChangeAction<Note>): Note{
    // creates a notebook object from a document snapshot
    const data = snapshot.payload.doc.data();
    let createdAt:any = (data.createdAt as any as firebase.firestore.Timestamp);
    createdAt = createdAt && createdAt.toDate().toLocaleString();
    
    let updatedAt:any = (data.updatedAt as any as firebase.firestore.Timestamp);
    updatedAt = updatedAt && updatedAt.toDate().toLocaleString();
    return new Note({
      ...data,
      createdAt: createdAt,
      updatedAt: updatedAt,
      id: snapshot.payload.doc.id,
      link: `/${NoteComponentRouteName}/${snapshot.payload.doc.id}`,
    });
  }
}
