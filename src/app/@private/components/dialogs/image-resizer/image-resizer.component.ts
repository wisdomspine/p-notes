import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-resizer',
  templateUrl: './image-resizer.component.html',
  styleUrls: ['./image-resizer.component.scss'],
})
export class ImageResizerComponent implements OnInit, AfterViewInit {
  private base64String: String = '';
  constructor(
    private sanitizer: DomSanitizer,
    private dialogRef: MatDialogRef<ImageResizerComponent>,
    @Inject(MAT_DIALOG_DATA) data: Partial<ImageResizerComponent>
  ) {
    Object.assign(this, data);
  }
  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close(null);
  }

  async submit() {
    this.dialogRef.close(await this.getBlob());
  }

  @Input()
  aspectRatio: number = 1;

  @Input()
  round: boolean = true;

  @Input()
  file: File;

  handleImageCropped(event: ImageCroppedEvent) {
    this.base64String = event.base64;
  }

  private async getBlob(): Promise<Blob> {
    if (!this.base64String) return null;
    const base64Response = await fetch(`${this.base64String}`);
    const blob = await base64Response.blob();
    return blob;
  }
}
