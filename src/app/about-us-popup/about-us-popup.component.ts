import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-popup',
  templateUrl: './about-us-popup.component.html',
  styleUrls: ['./about-us-popup.component.scss']
})
export class AboutUsPopupComponent implements OnInit {

  selected: string = null;

  constructor() {}

  ngOnInit() {}

  onSelect(button: string): void {
    this.selected = button;
    console.info("selected", button);
  }

}
