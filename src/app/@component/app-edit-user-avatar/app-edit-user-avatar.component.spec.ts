import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEditUserAvatarComponent } from './app-edit-user-avatar.component';

describe('AppEditUserAvatarComponent', () => {
  let component: AppEditUserAvatarComponent;
  let fixture: ComponentFixture<AppEditUserAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppEditUserAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEditUserAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
