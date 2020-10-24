import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { NoteContent } from 'src/app/@core/models/NoteContent';
import { AccountService } from 'src/app/@core/provider/account.service';
import { AppStorageService } from 'src/app/@core/provider/app-storage.service';
import { FontFamilyService } from 'src/app/@core/provider/font-family.service';
import { NoteService } from 'src/app/@core/provider/note.service';
import { NotesComponentRoute } from 'src/app/route-names';
import { AppUser } from 'src/types';
import { UploadHandler } from 'tinymce';
import { AppPrivateModuleBaseRoute } from '../@private-routing.module';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnDestroy {
  static routeName: string = 'notes';
  static route: String = `notes`;
  static param: String = 'note';

  private user: AppUser
  private userSubscription: Subscription;

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
    private appStorage: AppStorageService,
    accounService: AccountService

  ) {
    this.userSubscription = accounService.currentAccount.subscribe(u => {
      this.user = u;
    })
  }
  ngOnDestroy(): void {
    // Clean up resources
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {

  }

  handlePrint(){
    this.noteService.print(this.note);
  }

  handleInput(value: String){
    this.note.content = {...this.note.content, value};    
  }

  handleUpload: UploadHandler = (blobInfo, success)=>{
    this.appStorage.upload(blobInfo.blob(), this.user).subscribe(url => success(`${url}`));
  }

  
}
