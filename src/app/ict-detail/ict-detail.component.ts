import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ict-detail',
  templateUrl: './ict-detail.component.html',
  styleUrls: ['./ict-detail.component.scss']
})
export class IctDetailComponent implements OnInit {
  tabCurrent: any = 'TELECOMM';

  constructor() { }

  ngOnInit(): void {
  }
  switchContent(tab: any): void {
    this.tabCurrent = tab;
  }

}
