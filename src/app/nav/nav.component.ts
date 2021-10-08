import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {
  constructor(private location: Location) {}

  back(): void {
    this.location.back();
  }

  ngOnInit(): void {}
}
