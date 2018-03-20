import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate'; 
import { Http } from '@angular/http';

import { AppComponent } from './app.component';

export function createTranslateLoader( http: Http ) {
	return new TranslateStaticLoader( http, 'locales/' );
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
