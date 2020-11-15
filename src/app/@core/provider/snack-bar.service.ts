import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { 

  }

  error(message: string = 'Error'){
    this.matSnackBar.open(message, null, {panelClass:'snack-error', horizontalPosition: "right", verticalPosition: "bottom"});
  }

  show(message: string = "Info"){
    this.matSnackBar.open(message, null, {panelClass:'snack-basic', horizontalPosition: "right", verticalPosition: "bottom"});
  }


}
