import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTextEditorTitleComponent } from './app-text-editor-title.component';

describe('AppTextEditorTitleComponent', () => {
  let component: AppTextEditorTitleComponent;
  let fixture: ComponentFixture<AppTextEditorTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTextEditorTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTextEditorTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
