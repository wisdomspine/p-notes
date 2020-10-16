import { Injectable } from '@angular/core';
import { AppDialogService } from './app-dialog.service';

@Injectable({
  providedIn: 'root',
})
export class EditAccountService {
  constructor(private dialogService: AppDialogService) {}

  edit() {
    this.dialogService
      .editAccount({
        email: 'sabopriest@gmail.com',
        name: 'Priest Sabo Ombugadu',
        image:
          'https://images.generated.photos/muR2OZFMwmdV-MSCNSW6s4FDZq6v4GenjuD7-EGhM3k/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzOTAuanBn.jpg',
      })
      .subscribe(console.log);
  }
}
