import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { FontFamily } from 'src/app/@core/models/FontFamily';
import { EditorSettings } from 'tinymce';
import { UploadHandler } from 'tinymce/tinymce';

@Component({
  selector: 'app-text-editor',
  templateUrl: './app-text-editor.component.html',
  styleUrls: ['./app-text-editor.component.scss'],
})
export class AppTextEditorComponent implements OnInit {
  @Input()
  fonts: FontFamily[] = [];

  @Input('fileHandler')
  fileHandler: UploadHandler;

  @Output('input')
  onInput: EventEmitter<String> = new EventEmitter<String>();

  private subject: Subject<String> = new Subject<String>();

  @Input()
  content: String = 'Give God the praise';

  constructor() {
    //emit input events in an interval of 200ms
    //I have to delay it because handleChange can be called multiple times in a row
    //as a result of subscribing to multiple editor events in the templates
    this.subject.pipe(debounce(() => interval(200))).subscribe((input) => {
      // console.log(input); //I included this line to test the debounce observable frequency
      this.onInput.emit(input);
    });
  }

  ngOnInit(): void {}

  get init(): Partial<EditorSettings> {
    return {
      base_url: '/tinymce',
      suffix: '.min',
      menubar: false,
      toolbar:
        'cust_formatting  align  | outdent indent | bullist numlist | image table link hr codesample  blockquote | print',
      plugins: 'lists autolink link image table print hr codesample  toc',
      inline: false,
      toc_header: 'div',
      default_link_target: '_blank',
      placeholder: 'Type here...',
      statusbar: false,
      browser_spellcheck: true,
      toolbar_groups: {
        cust_formatting: {
          icon: 'format',
          tooltip: 'Format',
          items: 'fontselect | bold italic underline | superscript subscript',
        },
        align: {
          icon: 'align-left',
          tooltip: 'Alignment',
          items: 'alignleft aligncenter alignright alignjustify',
        },
      },
      a11y_advanced_options: true,
      file_picker_types: 'image',
      image_advtab: false,
      image_description: false,
      image_dimensions: false,
      images_upload_url: 'google.com',
      block_unsupported_drop: true,
      images_upload_handler:
        this.fileHandler ||
        function (blobInfo, success) {
          console.log(blobInfo);
          success(
            'https://images.unsplash.com/photo-1602152733225-430e1cd3b9f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
          );
        },
      height: '100%',
      content_style: this.fonts.map((f) => `@import url(${f.ulr});`).join(''),
      font_formats: this.fonts.map((f) => `${f.name}=${f.value}`).join('; '),
    };
  }

  handleChange() {
    this.subject.next(this.content);
  }
}
