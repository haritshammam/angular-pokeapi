import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { Poketype } from '../../models/poketype';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  pokemonTypes: Poketype[] = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getAllPokemonType();
  }

  getAllPokemonType(type?: string): void {
    this.pokedexService
      .getPokemonType()
      .subscribe((types) => (this.pokemonTypes = types));
  }
}
