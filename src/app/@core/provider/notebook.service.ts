import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from 'src/types';
import { Notebook } from '../models/Notebook';
import { AccountService } from './account.service';
import { AppDialogService } from './app-dialog.service';
import { AppStorageService } from './app-storage.service';

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
  ) {
    accountService.currentAccount.subscribe(u => {
      this.user = u;
      if(this._notebooksSubscription){
        this._notebooksSubscription.unsubscribe();
      }
      this._notebooksSubscription = fireStore.collection<Notebook>(this.collectionPath).snapshotChanges().pipe(map(docs => docs.map(doc => Notebook.fromDocumentSnapshot(doc)))).subscribe(notebooks => {
        this._notebooks.next(notebooks);
      });
    });

    
  }



  //show a  notebook details
  showDetails(notebook: Notebook | String) {
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

  editNotebookDetails(notebook: Notebook | String){
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
    return this._notebooks.pipe(map(books => books.filter(b => reg.test(`${b.name || ''}`) || reg.test(`${b.description || ''}`))));
  }

  notebook(id: String): Observable<Notebook>{
    return this._notebooks.pipe(map(books => books.find(book => book.id == id)));
  }

  private _delete(id: String){
    this.fireStore.doc(this.collectionPath+`/${id}`).delete().then(success => {

    }).catch(error => {

    })
  }

  delete(id: String){
    this.dialogService.confirmNotebookDelete().subscribe(r =>{
      if(r && r.delete){
        this._delete(id);
      }
    });
  }
}
