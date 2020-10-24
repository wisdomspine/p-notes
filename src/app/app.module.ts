import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './@component/@component.module';
import { CoreModule } from './@core/@core.module';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { HomeComponent } from './public/home/home.component';
import { HomeMobileComponent } from './public/home-mobile/home-mobile.component';
import { HomeDesktopComponent } from './public/home-desktop/home-desktop.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    HomeMobileComponent, 
    HomeDesktopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ComponentModule,
    CoreModule,
    EditorModule,

    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  exports: [
    AngularFireModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
