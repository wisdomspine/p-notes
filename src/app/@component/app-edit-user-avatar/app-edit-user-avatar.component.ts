import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-user-avatar',
  templateUrl: './app-edit-user-avatar.component.html',
  styleUrls: ['./app-edit-user-avatar.component.scss'],
})
export class AppEditUserAvatarComponent implements OnInit, AfterViewInit {
  @Input()
  image: String =
    'https://images.generated.photos/muR2OZFMwmdV-MSCNSW6s4FDZq6v4GenjuD7-EGhM3k/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MDIzOTAuanBn.jpg';

  @Input()
  radius: number = 56;

  // @ViewChild('fileInput')
  // fileHolder: ElementRef;

  // @ViewChild('inputTrigger')
  // trigger: ElementRef

  @Output('change')
  imageChange: EventEmitter<File> = new EventEmitter<File>();

  constructor(private sanitizer: DomSanitizer) {}
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  get imageUrl(): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`${this.image}`);
  }

  handleInput(event) {
    this.imageChange.emit(event.target.files[0]);
  }
}
