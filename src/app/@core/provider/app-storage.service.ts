import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AppUser } from 'src/types';
import { v4 as uid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {
  constructor(
    private fireStorage: AngularFireStorage,
  ) { 

  }

  upload(file: Blob | File, currentUser: AppUser):Observable<String>{
    const subject: Subject<String> = new Subject<String>();
    const path = `/personal/${currentUser.uid}/${uid()}`;
    const ref = this.fireStorage.ref(path);
    const uploadTask = this.fireStorage.upload(path, file);
    uploadTask.snapshotChanges().pipe(finalize(()=> {
      
      ref.getDownloadURL().subscribe(e => subject.next(e));
    })).subscribe();

    return subject;
  }
  
}
