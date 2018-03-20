import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {TranslateService }from 'ng2-translate';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  ngOnInit(){
    AOS.init();
  }

  openSermonCloud(){
    window.open('http://www.sermoncloud.com/hfan-toronto/', '_blank');
  }
}
