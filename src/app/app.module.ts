import { ChapterOneComponent } from './chapters/chapter-one/chapter-one.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StanzaComponent } from './stanza/stanza.component';
import { FormsModule } from '@angular/forms';
import { InViewportModule } from 'ng-in-viewport';
import { ChaptersComponent } from './chapters/chapters.component';

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      ChapterOneComponent,
      StanzaComponent,
      ChaptersComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    InViewportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
