import { Component, AfterViewInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  openSermonCloud(){
    window.open('http://www.sermoncloud.com/hfan-toronto/', '_blank');
  }
}
