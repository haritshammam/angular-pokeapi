import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'pokecard',
  templateUrl: './pokecard.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  pokemonDetailsData: any;

  @Input() data: any;

  constructor(private route: Router, private pokedexService: PokedexService) {}

  ngOnInit(): void {}

  navigateToPage(pageUrl: string): void {
    this.route.navigate([pageUrl]);
  }
}
