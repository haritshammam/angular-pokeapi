import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { NameUrl } from 'src/app/models/base-name-url';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public pokemonTypes: NameUrl[] = [];
  public pokemonList: NameUrl[] = [];
  public pokemonDetails: any;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getAllPokemonType();
    this.getPokemonList();
  }

  getAllPokemonType(type?: string): void {
    this.pokedexService
      .getPokemonType()
      .subscribe((types) => (this.pokemonTypes = types));
  }

  getPokemonList(offset: number = 0, limit: number = 30): void {
    this.pokedexService
      .getPokemonList(offset, limit)
      .subscribe((list) => (this.pokemonList = list));
  }
}
