import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-ict-detail',
  templateUrl: './ict-detail.component.html',
  styleUrls: ['./ict-detail.component.scss'],
  animations: [
  trigger('fadeIn', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ])
  ])
]
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
