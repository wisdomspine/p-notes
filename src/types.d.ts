import { Observable } from 'rxjs';

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
