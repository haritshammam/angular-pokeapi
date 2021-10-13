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

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getAllPokemonTypeList();
    this.getPokemonList();
  }

  getAllPokemonTypeList(): void {
    this.pokedexService
      .getAllPokemonTypeList()
      .subscribe((types) => (this.pokemonTypes = types));
  }

  getPokemonList(offset: number = 0, limit: number = 30): void {
    this.pokedexService
      .getPokemonList(offset, limit)
      .subscribe((list) => (this.pokemonList = list));
  }

  getPokemonBasedOnType(type: string): void {
    this.pokedexService
      .getPokemonBasedOnType(type)
      .subscribe((list) => (this.pokemonList = list));
  }
}
