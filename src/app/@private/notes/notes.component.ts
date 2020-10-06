import { Component, OnInit } from '@angular/core';
import { AppPrivateModuleBaseRoute } from '../@private-routing.module';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  static routeName: string = 'notes';
  static route: String = `notes`;
  constructor() {}

  ngOnInit(): void {}
}
