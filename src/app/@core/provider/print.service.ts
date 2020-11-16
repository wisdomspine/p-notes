import { Injectable } from '@angular/core';
import { Note } from '../models/Note';
import tinyPrint from "tiny-print";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  private _elId: String = "_k_app_tiny";

  constructor(
    
  ) { 

  }

  print(note: Note = new Note({})):Promise<void>{
    const promise: Promise<void> = new Promise((resolve) => {
      const div: HTMLDivElement =document.querySelector(`#${this.elId}`);
      div.style.display = "block";
      div.innerHTML = `
        <h1 style='text-transform: capitalize;'>${note.title}</h1>
        ${note.content && note.content.value || ''}
      `
      div.style.padding="24px";

      tinyPrint(div, {
        scanStyles: true,
        scanHTML: true,
        hidePageRule: true,
      })
      resolve();
    })
    return promise;;
  }

  get elId():String{
    return this._elId;
  }
  
}
