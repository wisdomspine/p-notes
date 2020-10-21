import { Injectable } from '@angular/core';
import { AppDialogService } from './app-dialog.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private dialogService: AppDialogService
  ) { 

  }

  login(): void{
    this.dialogService.showAuthDialog({login: true, register: false}).subscribe(console.log);
  }

  register(): void{
    this.dialogService.showAuthDialog({register: true, login: false}).subscribe(console.log);
  }
}
