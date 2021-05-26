import { Component, OnInit } from '@angular/core';
// import * as AOS from 'aos';
import { style, state, animate, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
  trigger('fadeIn', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({ opacity: 0 }),
      animate(500, style({ opacity: 1 }))
    ])
  ])
]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // AOS.init();
  }

}
