import { Component, OnInit } from '@angular/core';
import { style, state, animate, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-water-detail',
  templateUrl: './water-detail.component.html',
  styleUrls: ['./water-detail.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class WaterDetailComponent implements OnInit {

  filter: any = 'all';
  filterDisplayName: any = 'All';
  constructor() { }

  ngOnInit(): void {

  }


  filterOptions(option: any): void {
    this.filter = option;

    if (option === 'all') {
      this.filterDisplayName = 'All';
    }
    if (option === 'accessories') {
      this.filterDisplayName = 'Accessories';
    }
    if (option === 'units') {
      this.filterDisplayName = 'RO Units';
    }
    if (option === 'other') {
      this.filterDisplayName = 'Filters & Pumps';
    }

  }

}
