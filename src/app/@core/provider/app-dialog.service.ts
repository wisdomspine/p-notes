import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { AuthDialogComponent } from 'src/app/@component/dialogs/auth-dialog/auth-dialog.component';
import { DeleteNoteDialogComponent } from 'src/app/@private/components/dialogs/delete-note-dialog/delete-note-dialog.component';
import { DeleteNotebookDialogComponent } from 'src/app/@private/components/dialogs/delete-notebook-dialog/delete-notebook-dialog.component';
import { EditAccountComponent } from 'src/app/@private/components/dialogs/edit-account/edit-account.component';
import { EditNoteComponent } from 'src/app/@private/components/dialogs/edit-note/edit-note.component';
import { EditNotebookComponent } from 'src/app/@private/components/dialogs/edit-notebook/edit-notebook.component';
import { ImageResizerComponent } from 'src/app/@private/components/dialogs/image-resizer/image-resizer.component';
import { LeaveAReviewComponent } from 'src/app/@private/components/dialogs/leave-areview/leave-areview.component';
import { NoteDetailsComponent } from 'src/app/@private/components/dialogs/note-details/note-details.component';
import { NotebookDetailsComponent } from 'src/app/@private/components/dialogs/notebook-details/notebook-details.component';
import { ReviewAppreciationComponent } from 'src/app/@private/components/dialogs/review-appreciation/review-appreciation.component';
import {
  AppUser,
  AuthDialogInput,
  AuthDialogOutput,
  DeleteNotebookDialogResult,
  EditAccountInput,
  EditAccountResult,
  EditNotebookInput,
  EditNoteInput,
  Review,
} from 'src/types';
import { Note } from '../models/Note';
import { Notebook } from '../models/Notebook';

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
              return this.resizeImage({ file: file });
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

  resizeImage(data: Partial<ImageResizerComponent>): Observable<Blob> {
    const subject: Subject<Blob> = new Subject<Blob>();
    this.dialog
      .open<ImageResizerComponent, Partial<ImageResizerComponent>, Blob>(
        ImageResizerComponent,
        {
          maxWidth: 500,
          minWidth: 400,
          panelClass: `${this.panelClass}`,
          data: data,
        }
      )
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }

  showNotebookDetails(notebook: Notebook): Observable<boolean> {
    const subject: Subject<boolean> = new Subject<boolean>();
    this.dialog
      .open<NotebookDetailsComponent, Notebook, boolean>(
        NotebookDetailsComponent,
        {
          maxWidth: 500,
          minWidth: 300,
          panelClass: `${this.panelClass}`,
          data: notebook,
        }
      )
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }

  editNotebook(notebook?: Notebook): Observable<Notebook> {
    const subject: Subject<Notebook> = new Subject<Notebook>();
    this.dialog
      .open<EditNotebookComponent, EditNotebookInput, Notebook>(
        EditNotebookComponent,
        {
          maxWidth: 500,
          minWidth: 350,
          panelClass: `${this.panelClass}`,
          data: {
            notebook,
            imageChangeHandler: (file: File) => {
              return this.resizeImage({
                file: file,
                aspectRatio: 0.772,
                round: false,
              });
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

  showNoteDetails(note: Note): Observable<boolean> {
    const subject: Subject<boolean> = new Subject<boolean>();
    this.dialog
      .open<NoteDetailsComponent, Note, boolean>(
        NoteDetailsComponent,
        {
          maxWidth: 500,
          minWidth: 300,
          panelClass: `${this.panelClass}`,
          data: note,
        }
      )
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }  

  editNote(input: EditNoteInput = {}): Observable<Note> {
    if(input && !input.imageChangeHandler){
      input.imageChangeHandler =  (file: File) => {
        return this.resizeImage({
          file: file,
          aspectRatio: 0.772,
          round: false,
        });
      };
    }
    const subject: Subject<Note> = new Subject<Note>();
    this.dialog
      .open<EditNoteComponent, EditNoteInput, Note>(
        EditNoteComponent,
        {
          maxWidth: 500,
          minWidth: 350,
          panelClass: `${this.panelClass}`,
          data: input,
        }
      )
      .afterClosed()
      .subscribe((result) => {
        subject.next(result);
        subject.complete();
      });

    return subject;
  }  

  showAuthDialog(input: AuthDialogInput): Observable<AuthDialogOutput>{
    const subject: Subject<AuthDialogOutput> = new Subject<AuthDialogOutput>();
    this.dialog
      .open<AuthDialogComponent, AuthDialogInput, AuthDialogOutput>(
        AuthDialogComponent,
        {
          maxWidth: 300,
          minWidth: 250,
          panelClass: `${this.panelClass}`,
          data: input,
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
