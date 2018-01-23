import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutUsPopupComponent } from './about-us-popup/about-us-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsPopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
