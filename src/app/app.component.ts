import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    AOS.init();
  }

  openSermonCloud(){
    window.open('http://www.sermoncloud.com/hfan-toronto/', '_blank');
  }
}
