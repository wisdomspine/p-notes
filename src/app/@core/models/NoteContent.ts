import { DocumentChangeAction } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Note } from './Note';

export class NoteContent {
    value?: String;
    updatedAt?: String;

    constructor(
        init?: Partial<NoteContent>
    ){
        Object.assign(this, init);
    }

    
      toObject(param?:{update?: boolean}): object{
        const result:any=  {
          value: `${this.value || ''}`,
          
        };
            
        if(param.update)result.updatedAt =  firebase.firestore.FieldValue.serverTimestamp()
        return result;
      }  
    
      static fromValueChange(noteContent: any): NoteContent{
        // creates a notebook object from a document snapshot
        if(!noteContent) noteContent = new NoteContent({value:''});
        let updatedAt:any = (noteContent.updatedAt as any as firebase.firestore.Timestamp);
        updatedAt = updatedAt && updatedAt.toDate().toLocaleString();
        return new Note({
          ...noteContent,
          updatedAt: updatedAt,
        });
      }
}