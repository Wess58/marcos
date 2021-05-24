import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss']
})
export class SolarComponent implements OnInit {

  tabCurrent: any = 'ELECTRICITY';
  constructor() { }

  ngOnInit(): void {
    // window.scroll(0, 0);

  }

  switchContent(tab: any): void {
    this.tabCurrent = tab;
  }


}
