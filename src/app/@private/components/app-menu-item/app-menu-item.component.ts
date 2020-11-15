import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './app-menu-item.component.html',
  styleUrls: ['./app-menu-item.component.scss'],
})
export class AppMenuItemComponent implements OnInit {
  @Input()
  icon: String = 'home';

  @Input()
  link: String = '/';

  @Input()
  linkText: String = 'Notebooks';

  @Input()
  expanded: boolean = true;

  @Output('click')
  clickEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
