import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../../services/pokedex.service';
import { NameUrl } from 'src/app/models/base-name-url';
import { Pokemon } from 'src/app/models/pokemon-details';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
})
export class PokedexComponent implements OnInit {
  public pokemonTypes: NameUrl[] = [];
  public pokemonList: NameUrl[] = [];
  public pokemonDetails: Pokemon[] = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit(): void {
    this.getAllPokemonTypeList();
    // this.getPokemonList();
    this.getPokemonDetails()
  }

  getAllPokemonTypeList(): void {
    this.pokedexService
      .getAllPokemonTypeList()
      .subscribe((types) => (this.pokemonTypes = types));
  }

  getPokemonBasedOnType(type: string): void {
    this.pokedexService
      .getPokemonBasedOnType(type)
      .subscribe((list) => (this.pokemonList = list));
  }

  getPokemonList(offset: number = 0, limit: number = 30): void {
    this.pokedexService
      .getPokemonList(offset, limit)
      .subscribe((list) => (this.pokemonList = list));
  }

  getPokemonDetails(offset: number = 0, limit: number = 30): void {
    this.pokedexService
      .getPokemonDetails(offset, limit)
      .subscribe((pokemonDetail) => (this.pokemonDetails = pokemonDetail));
  }
}
