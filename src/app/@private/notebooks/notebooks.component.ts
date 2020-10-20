import { Component, OnInit } from '@angular/core';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { NotebookService } from 'src/app/@core/provider/notebook.service';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss'],
})
export class NotebooksComponent implements OnInit {
  static routeName: string = 'notebooks';
  static route: String = `notebooks`;
  constructor(
    private dialogService: AppDialogService,
    public notebookService: NotebookService
  ) {}

  ngOnInit(): void {}

  get notebooks(): Notebook[] {
    return Array(10)
      .fill(
        new Notebook({
          name: 'The agony of Tom Sawyer',
          link: `/${NotesComponent.route}/`,
          cover: `https://images.unsplash.com/photo-1529507926971-06fcbcc8cf2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1601&q=80`,
          description: 'The agony of Tom Sawyer',
        })
      )
      .map(function (n, i) {
        n.key = i;
        n.id = `${i}`;
        return n;
      });
  }
  handleDelete(index: number) {
    this.dialogService.confirmNotebookDelete().subscribe(r =>{
      if(r && r.delete){
        // TODO: call notebook service delete method
      }
    });
  }


  editNotebookDetails(index: number){
    this.notebookService.editNotebookDetails(this.notebooks[index]);
  }
}
