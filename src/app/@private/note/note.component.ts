import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { NoteContent } from 'src/app/@core/models/NoteContent';
import { FontFamilyService } from 'src/app/@core/provider/font-family.service';
import { NoteService } from 'src/app/@core/provider/note.service';
import { NotesComponentRoute } from 'src/app/route-names';
import { AppPrivateModuleBaseRoute } from '../@private-routing.module';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  static routeName: string = 'notes';
  static route: String = `notes`;
  static param: String = 'note';

  note: Note = new Note({
    notebook: new Notebook({name: 'The agony of Tom Sawyer', id: "30"}),
    title: 'Chapter 1',
    link: `/${NotesComponentRoute}/`,
    cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
    description: 'The agony of Tom Sawyer',
    createdAt: 'Sep 5, 2020 11:15pm',
    updatedAt: 'Sep 6, 2020 11:15pm',
    content: new NoteContent({value: "Hello world"})
  });

  constructor(
    public fontsProvider: FontFamilyService,
    public noteService: NoteService,
  ) {

  }

  ngOnInit(): void {

  }

  handlePrint(){
    this.noteService.print(this.note);
  }

  handleInput(value: String){
    this.note.content = {...this.note.content, value};    
  }

  
}
