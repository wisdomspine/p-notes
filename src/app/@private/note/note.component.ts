import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
