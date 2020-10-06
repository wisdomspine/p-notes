import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-toolbar-card',
  templateUrl: './app-user-toolbar-card.component.html',
  styleUrls: ['./app-user-toolbar-card.component.scss'],
})
export class AppUserToolbarCardComponent implements OnInit {
  @Input()
  image: String =
    'https://images.generated.photos/muR2OZFMwmdV-MSCNSW6s4FDZq6v4GenjuD7-EGhM3k/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzOTAuanBn.jpg';

  @Input()
  name: String = 'Priest Sabo Ombugadu';

  @Input()
  email: String = 'sabopriest@gmail.com';

  @Output()
  account: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  review: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  logout: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
}
