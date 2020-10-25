import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppUser } from 'src/types';
import { AppDialogService } from './app-dialog.service';
import { AppStorageService } from './app-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _userSubject: BehaviorSubject<AppUser> = new BehaviorSubject<AppUser>({});
  private currentUser: AppUser;

  constructor(
    private dialogService: AppDialogService,
    private authService: AngularFireAuth,
    private appStorage: AppStorageService,
    
  ) {

    authService.user.pipe(map(function(u: firebase.User):AppUser{
      return u ? {name: u.displayName, email: u.email, image: u.photoURL || null, uid: u.uid} : null;
    })).subscribe(u => {
      this._userSubject.next(u);
    })
    this._userSubject.subscribe(u => {
      this.currentUser = u;
    })
  }

  edit() {
    this.dialogService
      .editAccount(this.currentUser)
      .subscribe(result => {
        if(result){
          this.updateAccount(result.user, result.blob || null);
        }
      });
  }

  get currentAccount(): Observable<AppUser>{
    return this._userSubject;
  }

  private updateAccount(user: AppUser, photo?: Blob){
    
    
    let updateSubscription: Subscription = null;
    
    if(photo){
      updateSubscription = this.updateProfilePhoto(photo).subscribe(url => {
        updateSubscription.unsubscribe();
        this.updateData({...user, image: url});
      })
    }else{
      this.updateData(user);
    }
  }

  private updateData(user: AppUser){
    let updateSubscription: Subscription = null;
    updateSubscription = this.authService.user.subscribe(u => {
      u.updateProfile({displayName: user.name+"", photoURL: user.image+''}).then(() => {
        this._userSubject.next(user);
      });
      updateSubscription.unsubscribe()
    })
  }

  

  private updateProfilePhoto(photo: Blob): Observable<String>{
    return this.appStorage.upload(photo, this.currentUser);
  }
}
