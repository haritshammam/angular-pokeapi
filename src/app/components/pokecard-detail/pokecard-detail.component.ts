import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pokecard-detail',
  templateUrl: './pokecard-detail.component.html',
  styles: [],
})
export class PokecardDetailComponent implements OnInit {
  @Input() data: any;

  constructor() {}

  ngOnInit(): void {}

  getPokemonThemeColor(
    targetProps: string,
    pokemonType: string
  ) {
    return {
      'bg-pokemon-type-normal': pokemonType === 'normal' && targetProps === 'bg',
      'bg-pokemon-type-fighting': pokemonType === 'fighting' && targetProps === 'bg',
      'bg-pokemon-type-flying': pokemonType === 'flying' && targetProps === 'bg',
      'bg-pokemon-type-poison': pokemonType === 'poison' && targetProps === 'bg',
      'bg-pokemon-type-ground': pokemonType === 'ground' && targetProps === 'bg',
      'bg-pokemon-type-rock': pokemonType === 'rock' && targetProps === 'bg',
      'bg-pokemon-type-bug': pokemonType === 'bug' && targetProps === 'bg',
      'bg-pokemon-type-ghost': pokemonType === 'ghost' && targetProps === 'bg',
      'bg-pokemon-type-steel': pokemonType === 'steel' && targetProps === 'bg',
      'bg-pokemon-type-grass': pokemonType === 'grass' && targetProps === 'bg',
      'bg-pokemon-type-fire': pokemonType === 'fire' && targetProps === 'bg',
      'bg-pokemon-type-water': pokemonType === 'water' && targetProps === 'bg',
      'bg-pokemon-type-electric': pokemonType === 'electric' && targetProps === 'bg',
      'bg-pokemon-type-psychic': pokemonType === 'psychic' && targetProps === 'bg',
      'bg-pokemon-type-ice': pokemonType === 'ice' && targetProps === 'bg',
      'bg-pokemon-type-dragon': pokemonType === 'dragon' && targetProps === 'bg',
      'bg-pokemon-type-dark': pokemonType === 'dark' && targetProps === 'bg',
      'bg-pokemon-type-fairy': pokemonType === 'fairy' && targetProps === 'bg',
    };
  }
}
