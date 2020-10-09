import { Component, OnInit } from '@angular/core';
import { EditorSettings, TinyMCE } from 'tinymce';

@Component({
  selector: 'app-app-text-editor',
  templateUrl: './app-text-editor.component.html',
  styleUrls: ['./app-text-editor.component.scss'],
})
export class AppTextEditorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  init: Partial<EditorSettings> = {
    base_url: '/tinymce',
    suffix: '.min',
  };
}
