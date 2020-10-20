import { Injectable } from '@angular/core';
import { Note } from '../models/Note';
import tinyPrint from "tiny-print";

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  private _elId: String = "_k_app_tiny";

  constructor() { 

  }

  print(note: Note = {}){
    const div: HTMLDivElement =document.querySelector(`#${this._elId}`) || document.createElement("div")
    div.style.display = "block";
    div.innerHTML = `
      <h1 style='text-transform: capitalize;'>${note.title}</h1>
      ${note.content && note.content.value || ''}
    `
    div.id = `${this._elId}`;
    div.style.padding="24px";
    document.body.appendChild(div);

    tinyPrint(div, {
      scanStyles: false,
      scanHTML: true,
      hidePageRule: true,
    })
    
    // window.addEventListener("beforeprint", e => {
    //   console.log(9090);
    // })

    // window.addEventListener("afterprint", ()=>{
    //   div.parentNode.removeChild(div);
    //   alert(90)
      
    // })
    
  }

  
}
