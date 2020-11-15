import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from 'src/types';
import { Note } from '../models/Note';
import { Notebook } from '../models/Notebook';
import { NoteContent } from '../models/NoteContent';
import { AccountService } from './account.service';
import { AppDialogService } from './app-dialog.service';
import { AppStorageService } from './app-storage.service';
import { NotebookService } from './notebook.service';
import { PrintService } from './print.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private user: AppUser;
  private _notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);
  private _notesSubscription: Subscription;
  

  constructor(
    private dialogService: AppDialogService,
    private printer: PrintService,
    accountService: AccountService,
    private fireStore: AngularFirestore,
    private appStorage: AppStorageService, 
    private notebookService: NotebookService,   
  ) { 
    accountService.currentAccount.subscribe(user => {
      this.user = user;
      notebookService.notebooks().subscribe(books => {
        const booksMap: Map<String, Notebook> = new Map();
        books.forEach(book => {
          booksMap[`${book.id}`] = book;
        })
        // unsubscribe from previous user
        if(this._notesSubscription)this._notesSubscription.unsubscribe();
        this._notesSubscription = fireStore.collection<Note>(this.collectionPath).snapshotChanges().pipe(map(docs => docs.map(doc => Note.fromDocumentSnapshot(doc)))).subscribe(notes => {
          notes.forEach(note => {
            note.notebook = booksMap[`${note.notebookId}`];
          })
          this._notes.next(notes);
        });
      });
      
    });
  }
  showDetails(note: Note) {
    this.dialogService
    .showNoteDetails(
      note
    )
    .subscribe((e) => {
      if (e) this.editNoteDetails(note);
    });
  }

  editNoteDetails(note: Note){
    this.dialogService.editNote({
      note: note,
      notebooks: this.notebookService.notebooks(),
    }).subscribe(async note => {
      if(!note) return;
      
      if(note.coverFile){
        this.appStorage.upload(note.coverFile, this.user).subscribe(cover => {
          note.cover = cover+'';
          this._editNote(note);
        });
        
      }
      else{
        this._editNote(note);
      }
      
    });
  }  

  addNote() {
    this.dialogService.editNote({
      notebooks: this.notebookService.notebooks()
    }).subscribe(async note => {
      if(!note) return;
      if(note.coverFile){
        this.appStorage.upload(note.coverFile, this.user).subscribe(cover => {
          note.cover = cover+'';
          this._writeNote(note);
        });
        
      }
      else{
        this._writeNote(note);
      }
      
    });
  }

  print(noteId: String | Note){
    if(noteId instanceof Note) noteId = noteId.id;
    
    const subscription: Subscription = this.noteWithContent(noteId).subscribe(note => {
      this.printer.print(note).finally(() => {
        subscription.unsubscribe();
      });
    })
    
  }

  get collectionPath(): string{
    return `notes/${this.user.uid}/notes`;
  }

  private _writeNote(note: Note){
    this.fireStore.collection<Note>(this.collectionPath).add((new Note(note)).toObject({create: true, update: true}) as any).then(() => {
      // success
      // TODO: handle success
    }).catch(() => {
      // TODO: handle error
    })
  }  

  note(id: String): Observable<Note>{
    return this._notes.pipe(map(notes => notes.find(note => note.id == id)));
  }



  notes(param:{search?:string, notebookId?: string} ={}): Observable<Note[]>{
    param.search = param.search || ''; 
    const reg: RegExp = RegExp(param.search, 'ig');
    return this._notes.pipe(map(notes => notes.filter(n => reg.test(`${n.title || ''}`) || reg.test(`${n.description || ''}`)).filter(note => param.notebookId? (note.notebookId == param.notebookId) : true).map((note, index) => {
      note.key = index;
      return note;
    })));
  }

  private _editNote(note: Note){ 
   
    
    this.fireStore.doc<Note>(this.collectionPath+`/${note.id}`).update((new Note(note)).toObject({create: false, update: true}) as any).then(() => {
      // success
      // TODO: handle success
    }).catch(error => {
      console.error(error);
      
    })
  } 

  private _delete(id: String){
    this.fireStore.doc(this.collectionPath+`/${id}`).delete().then(() => {

    }).catch(() => {

    })
  }

  delete(id: String){
    this.dialogService.confirmNoteDelete().subscribe(r =>{
      if(r){
        this._delete(id);
      }
    });
  }

  private  content(noteId: String): Observable<NoteContent>{
    return this.fireStore.doc<NoteContent>(`${this.contentPath(noteId)}`).valueChanges().pipe(map(v => NoteContent.fromValueChange(v)));
  }

  noteWithContent(noteId: String): Observable<Note>{
    
    return combineLatest([this.note(noteId),this.content(noteId) ]).pipe(map(value => {
      if(!value[0]) return null;
      value[0].content = value[1];
      return value[0];
    }))
  };

  saveContent(noteId: String, content: NoteContent):Promise<void>{
    return this.fireStore.doc<NoteContent>(`${this.contentPath(noteId)}`).update(content.toObject({update:true}));
  }

  private contentPath(noteId: String): String{
    return `${this.collectionPath}/${noteId}/content/current`;
  }
}
