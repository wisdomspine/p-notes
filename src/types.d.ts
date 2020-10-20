import { Observable } from 'rxjs';
import { Note } from './app/@core/models/Note';
import { Notebook } from './app/@core/models/Notebook';

export type CSSUnit = 'px' | '%' | 'em' | 'rem';
export declare interface MenuItemModel {
  link?: String;
  text?: String;
  icon?: String;
}

export declare interface AppUser {
  name?: String;
  email?: String;
  image?: String;
}

export declare interface EditAccountResult {
  user?: AppUser;
  blob?: Blob;
}

export declare interface SearchFieldOutput {
  search?: String;
  notes?: boolean;
  notebooks?: boolean;
}

export declare interface DeleteNotebookDialogResult {
  deleteNotes?: boolean;
  delete?: boolean;
}

export declare interface Review {
  stars?: number;
  message?: String;
}

export type ImageResizerHandler = (file: File) => Observable<Blob>;

export declare interface EditAccountInput {
  imageChangeHandler: ImageResizerHandler;
  account: AppUser;
}

export declare interface EditNotebookInput {
  imageChangeHandler: ImageResizerHandler;
  notebook: Notebook;
}

export declare interface EditNoteInput {
  imageChangeHandler?: ImageResizerHandler;
  note?: Note;
  notebooks?: Observable<Notebook[]>;
}
