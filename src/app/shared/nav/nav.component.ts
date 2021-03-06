import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {


  opened: Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  closeDropdown(): void {
    const menu = document.getElementById('dropdown-menu') as HTMLElement;
    menu.style.display = "none";
  }
  openDropdown(): void {
    const menu = document.getElementById('dropdown-menu') as HTMLElement;
    menu.style.display = "block";
  }

  toggleSideNav(): void {
    this.opened = !this.opened;
    console.log(this.opened);
  }

}
