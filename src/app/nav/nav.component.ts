import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent implements OnInit {
  menuIsClicked: boolean = false;

  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }

  setMenuIsClicked(state: boolean): void {
    this.menuIsClicked = state;
  }

  ngOnInit(): void {}
}
