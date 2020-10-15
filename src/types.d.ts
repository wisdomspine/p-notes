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
