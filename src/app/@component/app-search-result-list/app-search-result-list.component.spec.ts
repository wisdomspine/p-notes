import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchResultListComponent } from './app-search-result-list.component';

describe('AppSearchResultListComponent', () => {
  let component: AppSearchResultListComponent;
  let fixture: ComponentFixture<AppSearchResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
