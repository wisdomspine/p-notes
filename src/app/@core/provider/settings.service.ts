import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppUser } from 'src/types';
import { Settings } from '../models/Settings';
import { AccountService } from './account.service';
import { FontFamilyService } from './font-family.service';


@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  user: AppUser;
  private default: Settings;
  private _setting: BehaviorSubject<Settings>;

  constructor(
    accountService: AccountService,
    private fireStore: AngularFirestore,
    fontService: FontFamilyService,
  ) { 
    accountService.currentAccount.subscribe(u => {
      this.user = u;
    })
    
    this.default = new Settings({fontFamily: fontService.default});
    this._setting = new BehaviorSubject<Settings>(this.default);

    this.fireStore.doc<Settings>(this.path).snapshotChanges().subscribe(changes => {
      if(changes.payload.exists){
        this._setting.next(Settings.fromObject(changes.payload.data()));
      }else{
        this._setting.next(this.default);
      }
    });
  }

  get settings(): Observable<Settings>{
    return this._setting;
  }

  update(settings: Settings): Promise<any>{
    return this.fireStore.doc<Settings>(this.path).set({...this.default.toObject(), ...settings.toObject()} as any);
  }

  get path(): string{
    return `settings/${this.user.uid}`;
  }
  
}
