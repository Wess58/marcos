import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-solar',
  templateUrl: './solar.component.html',
  styleUrls: ['./solar.component.scss'],
  animations: [
  trigger('fadeIn', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ])
  ])
]
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
