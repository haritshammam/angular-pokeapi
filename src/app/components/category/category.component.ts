import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
  @Input() name: string = 'Name';
  @Input() pageUrl: string = '/home';

  constructor(private route: Router) {}

  navigateToPage(pageUrl: string): void {
    this.route.navigate([pageUrl]);
  }

  ngOnInit(): void {}
}
