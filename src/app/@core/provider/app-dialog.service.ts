import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DeleteNoteDialogComponent } from 'src/app/@component/dialogs/delete-note-dialog/delete-note-dialog.component';
import { DeleteNotebookDialogComponent } from 'src/app/@component/dialogs/delete-notebook-dialog/delete-notebook-dialog.component';
import { LeaveAReviewComponent } from 'src/app/@component/dialogs/leave-areview/leave-areview.component';
import { DeleteNotebookDialogResult, Review } from 'src/types';

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

  confirmNoteDelete(): Observable<boolean> {
    const subject: Subject<boolean> = new Subject<boolean>();
    this.dialog
      .open<DeleteNoteDialogComponent, any, boolean>(
        DeleteNoteDialogComponent,
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

  startReview(): Observable<Review> {
    const subject: Subject<Review> = new Subject<Review>();
    this.dialog
      .open<LeaveAReviewComponent, any, Review>(LeaveAReviewComponent, {
        maxWidth: 400,
        minWidth: this.minWidth,
        panelClass: `${this.panelClass}`,
      })
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }
}
