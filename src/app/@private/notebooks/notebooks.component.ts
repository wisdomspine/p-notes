import { Component, OnInit } from '@angular/core';
import { Notebook } from 'src/app/@core/models/Notebook';
import { AppDialogService } from 'src/app/@core/provider/app-dialog.service';
import { NotebookService } from 'src/app/@core/provider/notebook.service';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss'],
})
export class NotebooksComponent implements OnInit {
  static routeName: string = 'notebooks';
  static route: String = `notebooks`;

  notebooks: Notebook[] = [];
  constructor(
    private dialogService: AppDialogService,
    public notebookService: NotebookService
  ) {
    notebookService.notebooks().subscribe(books => {
      this.notebooks = books;
    })
  }

  ngOnInit(): void {}

  handleDelete(index: number) {
    this.notebookService.delete(this.notebooks[index].id);
  }


  editNotebookDetails(index: number){
    this.notebookService.editNotebookDetails(this.notebooks[index]);
  }
}
