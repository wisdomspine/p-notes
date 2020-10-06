import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.scss'],
})
export class NotebooksComponent implements OnInit {
  static routeName: string = 'notebooks';
  static route: String = `notebooks`;
  constructor() {}

  ngOnInit(): void {}
}
