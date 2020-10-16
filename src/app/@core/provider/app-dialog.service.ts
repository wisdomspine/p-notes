import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { DeleteNoteDialogComponent } from 'src/app/@component/dialogs/delete-note-dialog/delete-note-dialog.component';
import { DeleteNotebookDialogComponent } from 'src/app/@component/dialogs/delete-notebook-dialog/delete-notebook-dialog.component';
import { EditAccountComponent } from 'src/app/@component/dialogs/edit-account/edit-account.component';
import { ImageResizerComponent } from 'src/app/@component/dialogs/image-resizer/image-resizer.component';
import { LeaveAReviewComponent } from 'src/app/@component/dialogs/leave-areview/leave-areview.component';
import { ReviewAppreciationComponent } from 'src/app/@component/dialogs/review-appreciation/review-appreciation.component';
import {
  AppUser,
  DeleteNotebookDialogResult,
  EditAccountInput,
  EditAccountResult,
  ImageResizerHandler,
  Review,
} from 'src/types';

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

  showReviewAppreciation() {
    this.dialog.open<ReviewAppreciationComponent, any, any>(
      ReviewAppreciationComponent,
      {
        maxWidth: 400,
        minWidth: this.minWidth,
        panelClass: `${this.panelClass}`,
      }
    );
  }

  editAccount(account: AppUser): Observable<EditAccountResult> {
    const subject: Subject<EditAccountResult> = new Subject<
      EditAccountResult
    >();
    this.dialog
      .open<EditAccountComponent, EditAccountInput, EditAccountResult>(
        EditAccountComponent,
        {
          maxWidth: 500,
          minWidth: 400,
          panelClass: `${this.panelClass}`,
          data: {
            account,
            imageChangeHandler: (file: File) => {
              return this.resizeImage(file);
            },
          },
        }
      )
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }

  resizeImage(file: File): Observable<Blob> {
    const subject: Subject<Blob> = new Subject<Blob>();
    this.dialog
      .open<ImageResizerComponent, File, Blob>(ImageResizerComponent, {
        maxWidth: 500,
        minWidth: 400,
        panelClass: `${this.panelClass}`,
        data: file,
      })
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }
}
