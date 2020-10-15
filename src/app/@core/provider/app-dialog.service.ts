import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DeleteNotebookDialogComponent } from 'src/app/@component/dialogs/delete-notebook-dialog/delete-notebook-dialog.component';
import { DeleteNotebookDialogResult } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class AppDialogService {
  private minWidth: number = 250;
  private panelClass: String = 'app-panel';
  constructor(private dialog: MatDialog) {}

  confirmNotebookDelete(): Observable<DeleteNotebookDialogResult> {
    const subject: Subject<DeleteNotebookDialogResult> = new Subject<
      DeleteNotebookDialogResult
    >();
    this.dialog
      .open<DeleteNotebookDialogComponent, any, DeleteNotebookDialogResult>(
        DeleteNotebookDialogComponent,
        {
          maxWidth: 400,
          minWidth: this.minWidth,
          panelClass: `${this.panelClass}`,
        }
      )
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }
}
