import { not } from '@angular/compiler/src/output/output_ast';
import { forwardRef, Inject, Injectable, Injector } from '@angular/core';
import { inject } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from 'src/types';
import { Notebook } from '../models/Notebook';
import { AccountService } from './account.service';
import { AppDialogService } from './app-dialog.service';
import { AppStorageService } from './app-storage.service';
import { NoteService } from './note.service';

@Injectable({
  providedIn: 'root',
})
export class NotebookService {
  private user: AppUser;
  private _notebooks: BehaviorSubject<Notebook[]> = new BehaviorSubject<Notebook[]>([]);
  private _notebooksSubscription: Subscription;
  constructor(
    private dialogService: AppDialogService,
    accountService: AccountService,
    private fireStore: AngularFirestore,
    private appStorage: AppStorageService,
    private injector: Injector
  ) {
    accountService.currentAccount.subscribe(u => {
      this.user = u;
      // Unsubscribe from previous user subscription
      if(this._notebooksSubscription){
        this._notebooksSubscription.unsubscribe();
      }
      this._notebooksSubscription = fireStore.collection<Notebook>(this.collectionPath).snapshotChanges().pipe(map(docs => docs.map(doc => Notebook.fromDocumentSnapshot(doc)))).subscribe(notebooks => {
        this._notebooks.next(notebooks);
      });
    });

    
  }



  //show a  notebook details
  showDetails(notebook: Notebook) {
    this.dialogService
      .showNotebookDetails(
        notebook as Notebook
      )
      .subscribe((e) => {
        if (e) this.editNotebookDetails(notebook);
      });
  }

  addNotebook() {
    this.dialogService.editNotebook().subscribe(async notebook => {
      if(!notebook) return;
      if(notebook.coverFile){
        this.appStorage.upload(notebook.coverFile, this.user).subscribe(cover => {
          notebook.cover = cover+'';
          this._writeNotebook(notebook);
        });
        
      }
      else{
        this._writeNotebook(notebook);
      }
      
    });
  }

  editNotebookDetails(notebook: Notebook){
    this.dialogService.editNotebook(notebook as Notebook).subscribe(async notebook => {
      if(!notebook) return;
      
      if(notebook.coverFile){
        this.appStorage.upload(notebook.coverFile, this.user).subscribe(cover => {
          notebook.cover = cover+'';
          this._editNotebook(notebook);
        });
        
      }
      else{
        this._editNotebook(notebook);
      }
      
    });
  }



  get collectionPath(): string{
    return `notebooks/${this.user.uid}/notebooks`;
  }

  private _writeNotebook(notebook: Notebook){
    this.fireStore.collection<Notebook>(this.collectionPath).add((new Notebook(notebook)).toObject({create: true, update: true}) as any).then(success => {
      // success
      // TODO: handle success
    }).catch(error => {
      // TODO: handle error
    })
  }

  private _editNotebook(notebook: Notebook){ 
    this.fireStore.doc<Notebook>(this.collectionPath+`/${notebook.id}`).update((new Notebook(notebook)).toObject({create: false, update: true}) as any).then(success => {
      // success
      // TODO: handle success
    }).catch(error => {
      // TODO: handle error
    })
  } 
  
  notebooks(search?:string): Observable<Notebook[]>{
    search = search || '';
    const reg: RegExp = RegExp(search, 'ig');
    return this._notebooks.pipe(map(books => books.filter(b => reg.test(`${b.name || ''}`) || reg.test(`${b.description || ''}`)).map((book, index) => {
      book.key = index;
      return book;
    })));
  }

  notebook(id: String): Observable<Notebook>{
    return this._notebooks.pipe(map(books => books.find(book => book.id == id)));
  }

  private _delete(id: String): Promise<void>{
    const noteService: NoteService = this.injector.get(NoteService);

    const promise: Promise<void> = new Promise((resolve, reject) => {
      const subscription:Subscription = noteService.notes({notebookId: `${id}`}).subscribe(notes => {
        
        // run transaction and update all notes to be in default notebook
        this.fireStore.firestore.runTransaction(transaction => {
          
          const notebookRef = this.fireStore.firestore.doc(`${this.collectionPath}/${id}`);
          return transaction.get(notebookRef).then(book => {
            if(!book.exists) throw new Error("Notebook not found");
            notes.forEach(note => {
              note.notebook = null;
              note.notebookId = null;
              transaction.update(this.fireStore.firestore.doc(`${noteService.collectionPath}/${note.id}`), note.toObject({create: false, update: true}));
            });
            transaction.delete(notebookRef);
          });
  
        }).then(s => {
          
          resolve();
        }).catch(e => {
          reject(e);
        }).finally(()=>{
          subscription.unsubscribe();
        });
      })
    });

    return promise;
  }

  private _deleteWithNotes(id: String): Promise<void>{

    const noteService: NoteService = this.injector.get(NoteService);

    const promise: Promise<void> = new Promise((resolve, reject) => {
      const subscription:Subscription = noteService.notes({notebookId: `${id}`}).subscribe(notes => {
        
        // run transaction and delete all notes in this notebook
        this.fireStore.firestore.runTransaction(transaction => {
          
          const notebookRef = this.fireStore.firestore.doc(`${this.collectionPath}/${id}`);
          return transaction.get(notebookRef).then(book => {
            if(!book.exists) throw new Error("Notebook not found");
            notes.forEach(note => {
              transaction.delete(this.fireStore.firestore.doc(`${noteService.collectionPath}/${note.id}`));
            });
            transaction.delete(notebookRef);
          });
  
        }).then(s => {
          
          resolve();
        }).catch(e => {
          reject(e);
        }).finally(()=>{
          subscription.unsubscribe();
        });
      })
    });

    return promise;

  }

  delete(id: String){
    this.dialogService.confirmNotebookDelete().subscribe(r =>{
      if(r && r.delete){
        const response: Promise<void> = r.deleteNotes? this._deleteWithNotes(id) : this._delete(id);
        response.then(success => {
          // TODO: Handle notebook delete success
        }).catch(error => {
          // TODO: Handle notebook delete error
          console.error(error);
          
        });
      }
    });
  }
}
