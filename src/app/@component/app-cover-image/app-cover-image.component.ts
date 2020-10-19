import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cover-image',
  templateUrl: './app-cover-image.component.html',
  styleUrls: ['./app-cover-image.component.scss'],
})
export class AppCoverImageComponent implements OnInit {
  @Input()
  width: number = 149;

  @Input()
  height: number = 193;

  @Input()
  image: String =
    'https://images.generated.photos/muR2OZFMwmdV-MSCNSW6s4FDZq6v4GenjuD7-EGhM3k/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzOTAuanBn.jpg';

  @Output('change')
  imageChange: EventEmitter<File> = new EventEmitter<File>();

  constructor(private sanitizer: DomSanitizer) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  get imageUrl(): SafeUrl {
    return this.image
      ? this.sanitizer.bypassSecurityTrustUrl(`${this.image}`)
      : null;
  }

  handleInput(event) {
    this.imageChange.emit(event.target.files[0]);
  }
}
