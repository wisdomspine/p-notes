import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AppDialogService } from './app-dialog.service';
import { auth } from "firebase/app";
import { AuthDialogOutput } from 'src/types';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/public/home/home.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private dialogService: AppDialogService,
    private fireAuth: AngularFireAuth,
    private router: Router,
  ) { 


  }

  login(): void{
    const _login = this._login;
    const instance = this;
    this.dialogService.showAuthDialog({login: true, register: false}).subscribe(function(output){
      
      _login(output, instance);
    });
  }

  register(): void{
    const _login = this._login;
    const instance = this;
    this.dialogService.showAuthDialog({register: true, login: false}).subscribe(function(output) {
      _login(output, instance);
    });
  }

  private _login(output: AuthDialogOutput, instance: AuthService){
    
    if(output.google){
      instance._loginWithGoogle();
      
    }else{
      instance._loginWithTwitter();
    }
  }
  private _loginWithTwitter(){
    const provider: auth.TwitterAuthProvider = new auth.TwitterAuthProvider();
    this.fireAuth.signInWithRedirect(provider).then(e => {

    })
  }

  private _loginWithGoogle(){
    
    const provider: auth.GoogleAuthProvider = new auth.GoogleAuthProvider();
    this.fireAuth.signInWithRedirect(provider).then(e => {

    })
  }

  logout(){
    this.fireAuth.signOut().then(e => {
      console.log("signed out");
      
      this.router.navigateByUrl(`/${HomeComponent.route}`);
    });
  }
}
