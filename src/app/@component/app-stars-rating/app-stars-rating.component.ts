import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './app-stars-rating.component.html',
  styleUrls: ['./app-stars-rating.component.scss'],
})
export class AppStarsRatingComponent implements OnInit {
  @Input()
  stared: number = 0;

  @Input()
  static: boolean = false;

  @Output('stared')
  clickEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output('hover')
  hoverEvent: EventEmitter<number> = new EventEmitter<number>();

  stars: number[] = [1, 2, 3, 4, 5];

  constructor() {}

  ngOnInit(): void {}

  hoverHandle(star: number) {
    !this.static && this.hoverEvent.emit(star);
  }

  clickHandle(star: number) {
    !this.static && this.clickEvent.emit(star);
  }
}
