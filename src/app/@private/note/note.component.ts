import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/@core/models/Note';
import { Notebook } from 'src/app/@core/models/Notebook';
import { NoteContent } from 'src/app/@core/models/NoteContent';
import { AccountService } from 'src/app/@core/provider/account.service';
import { AppStorageService } from 'src/app/@core/provider/app-storage.service';
import { FontFamilyService } from 'src/app/@core/provider/font-family.service';
import { NoteService } from 'src/app/@core/provider/note.service';
import { SettingsService } from 'src/app/@core/provider/settings.service';
import { NoteComponentRoute, NoteComponentRouteName, NotesComponentRoute } from 'src/app/route-names';
import { AppUser } from 'src/types';
import { UploadHandler } from 'tinymce';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit, OnDestroy {
  static routeName: string = NoteComponentRouteName;
  static route: String = NoteComponentRoute;
  static param: String = 'note';

  private user: AppUser
  private userSubscription: Subscription;

  note: Note;

  constructor(
    public fontsProvider: FontFamilyService,
    public noteService: NoteService,
    private appStorage: AppStorageService,
    accounService: AccountService,
    public settings: SettingsService,
    activeRoute: ActivatedRoute,

  ) {
    this.userSubscription = accounService.currentAccount.subscribe(u => {
      this.user = u;
    })
    this.noteService.noteWithContent(activeRoute.snapshot.paramMap.get(`${NoteComponent.param}`)).subscribe(note => {
      this.note = note;
    });
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
    this.note.content = new NoteContent({...this.note.content, value});  
    this.noteService.saveContent(this.note.id, this.note.content)  ;
  }

  handleUpload: UploadHandler = (blobInfo, success)=>{
    this.appStorage.upload(blobInfo.blob(), this.user).subscribe(url => success(`${url}`));
  }
}
