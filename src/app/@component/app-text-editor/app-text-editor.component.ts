import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { interval, Subject } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { FontFamily } from 'src/app/@core/models/FontFamily';
import { Bookmark, BookmarkManager, Editor, EditorSettings } from 'tinymce';
import { UploadHandler } from 'tinymce/tinymce';

const  _kPrintId: String = 'app_print';


@Component({
  selector: 'app-text-editor',
  templateUrl: './app-text-editor.component.html',
  styleUrls: ['./app-text-editor.component.scss'],
})
export class AppTextEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input()
  fonts: FontFamily[] = [];

  @Input()
  font: FontFamily;

  @Input('fileHandler')
  fileHandler: UploadHandler;

  @Output('input')
  onInput: EventEmitter<String> = new EventEmitter<String>();

  @Output('print')
  onPrint: EventEmitter<any> = new EventEmitter<any>();

  private subject: Subject<String> = new Subject<String>();

  @Input("content")
  set _content(value: String){
    this.content = value;
    if(this.bookmark){
      this.editor.selection.moveToBookmark(this.bookmark);
      this.bookmark = null;      
    }
  }
  content: String = null;

  private editor: Editor;
  private bookmark: Bookmark;
  

  constructor() {
    //emit input events in an interval of 200ms
    //I have to delay it because handleChange can be called multiple times in a row
    //as a result of subscribing to multiple editor events in the templates
    this.subject.pipe(debounce(() => interval(1000))).subscribe((input) => {
      // console.log(input); //I included this line to test the debounce observable frequency
      this.emitChange(input);
    });
  }
  ngOnDestroy(): void {
    this.subject && this.subject.complete();
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {}

  get init(): Partial<EditorSettings> {
    const emitter = this.onPrint;
    const instance:AppTextEditorComponent = this;

    return {
      base_url: '/tinymce',
      suffix: '.min',
      menubar: false,
      toolbar:
        `cust_formatting  align  | outdent indent | bullist numlist | image table link hr codesample  blockquote | ${_kPrintId}`,
      plugins: 'lists autolink link image table hr codesample  toc',
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
          // console.log(blobInfo);
          success(
            'https://images.unsplash.com/photo-1602152733225-430e1cd3b9f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'
          );
        },
      height: '100%',
      content_style: this.contentStyle,
      font_formats: this.fonts.map((f) => `${f.name}=${f.value}`).join('; '),
      setup: function(editor) {
        instance.editor = editor;
        editor.ui.registry.addButton(`${_kPrintId}`, {
          icon : "print",
          tooltip: 'Print note',
          onAction: function() {
            emitter.emit();           
          },
        })
      }
    };
  }

  handleChange() {
    
    if (this.editor) {
      this.subject.next(this.content);
    }
  }

  private emitChange(input){
    if (this.editor) {
      try {
        this.bookmark =  this.editor.selection.getBookmark();
        this.onInput.emit(input);
      } catch (error) {
        console.log(error.message);
      }
    }
    
  }

  get contentStyle(): string{
    let style = this.fonts.map((f) => `@import url(${f.ulr});`).join('');
    if(this.font){
      style+=`body{font-family: ${this.font.value};}`;
    }

    return style;
  }
  
}
