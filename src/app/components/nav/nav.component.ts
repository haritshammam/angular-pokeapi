import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { navItems } from '../../utils/nav-item';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  menuIsClicked: boolean = false;
  navItems: { link: string; title: string }[] = navItems;

  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }

  setMenuIsClicked(state: boolean): void {
    this.menuIsClicked = state;
  }

  ngOnInit(): void {}
}
