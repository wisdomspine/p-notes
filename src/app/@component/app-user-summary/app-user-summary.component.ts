import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-summary',
  templateUrl: './app-user-summary.component.html',
  styleUrls: ['./app-user-summary.component.scss'],
})
export class AppUserSummaryComponent implements OnInit {
  @Input()
  image: String =
    'https://images.generated.photos/muR2OZFMwmdV-MSCNSW6s4FDZq6v4GenjuD7-EGhM3k/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzOTAuanBn.jpg';

  @Input()
  name: String = 'Priest Sabo Ombugadu';

  @Input()
  email: String = 'sabopriest@gmail.com';
  constructor() {}

  ngOnInit(): void {}
}
