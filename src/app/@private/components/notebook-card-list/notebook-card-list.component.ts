import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Notebook } from 'src/app/@core/models/Notebook';

@Component({
  selector: 'app-notebook-card-list',
  templateUrl: './notebook-card-list.component.html',
  styleUrls: ['./notebook-card-list.component.scss'],
})
export class NotebookCardListComponent implements OnInit {
  @Input()
  notebooks: Notebook[] = [];

  /**
   * emit the index of notebook whose details button is clicked
   */
  @Output('details')
  detailsClicked: EventEmitter<number> = new EventEmitter<number>();

  /**
   * emit the index of notebook whose settings button is clicked
   */
  @Output('settings')
  settingsClicked: EventEmitter<number> = new EventEmitter<number>();

  /**
   * emit the index of notebook whose delete button is clicked
   */
  @Output('delete')
  onDelete: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  trackBy(notebook: Notebook): number {
    return notebook.key;
  }
}
