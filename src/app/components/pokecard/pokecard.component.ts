import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pokecard',
  templateUrl: './pokecard.component.html',
  styles: [],
})
export class CardComponent implements OnInit {
  @Input() data: any;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  getPokemonThemeColor(
    targetProps: string,
    pokemonType: string,
    targetState?: string
  ) {
    return {
      'hover:bg-pokemon-type-normal':
        pokemonType === 'normal' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-fighting':
        pokemonType === 'fighting' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-flying':
        pokemonType === 'flying' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-poison':
        pokemonType === 'poison' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-ground':
        pokemonType === 'ground' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-rock':
        pokemonType === 'rock' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-bug':
        pokemonType === 'bug' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-ghost':
        pokemonType === 'ghost' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-steel':
        pokemonType === 'steel' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-grass':
        pokemonType === 'grass' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-fire':
        pokemonType === 'fire' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-water':
        pokemonType === 'water' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-electric':
        pokemonType === 'electric' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-psychic':
        pokemonType === 'psychic' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-ice':
        pokemonType === 'ice' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-dragon':
        pokemonType === 'dragon' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-dark':
        pokemonType === 'dark' && targetProps === 'bg' && targetState,
      'hover:bg-pokemon-type-fairy':
        pokemonType === 'fairy' && targetProps === 'bg' && targetState,
      'bg-pokemon-type-normal':
        pokemonType === 'normal' && targetProps === 'bg',
      'bg-pokemon-type-fighting':
        pokemonType === 'fighting' && targetProps === 'bg',
      'bg-pokemon-type-flying':
        pokemonType === 'flying' && targetProps === 'bg',
      'bg-pokemon-type-poison':
        pokemonType === 'poison' && targetProps === 'bg',
      'bg-pokemon-type-ground':
        pokemonType === 'ground' && targetProps === 'bg',
      'bg-pokemon-type-rock': pokemonType === 'rock' && targetProps === 'bg',
      'bg-pokemon-type-bug': pokemonType === 'bug' && targetProps === 'bg',
      'bg-pokemon-type-ghost': pokemonType === 'ghost' && targetProps === 'bg',
      'bg-pokemon-type-steel': pokemonType === 'steel' && targetProps === 'bg',
      'bg-pokemon-type-grass': pokemonType === 'grass' && targetProps === 'bg',
      'bg-pokemon-type-fire': pokemonType === 'fire' && targetProps === 'bg',
      'bg-pokemon-type-water': pokemonType === 'water' && targetProps === 'bg',
      'bg-pokemon-type-electric':
        pokemonType === 'electric' && targetProps === 'bg',
      'bg-pokemon-type-psychic':
        pokemonType === 'psychic' && targetProps === 'bg',
      'bg-pokemon-type-ice': pokemonType === 'ice' && targetProps === 'bg',
      'bg-pokemon-type-dragon':
        pokemonType === 'dragon' && targetProps === 'bg',
      'bg-pokemon-type-dark': pokemonType === 'dark' && targetProps === 'bg',
      'bg-pokemon-type-fairy': pokemonType === 'fairy' && targetProps === 'bg',
      'text-pokemon-type-normal':
        pokemonType === 'normal' && targetProps === 'text',
      'text-pokemon-type-fighting':
        pokemonType === 'fighting' && targetProps === 'text',
      'text-pokemon-type-flying':
        pokemonType === 'flying' && targetProps === 'text',
      'text-pokemon-type-poison':
        pokemonType === 'poison' && targetProps === 'text',
      'text-pokemon-type-ground':
        pokemonType === 'ground' && targetProps === 'text',
      'text-pokemon-type-rock':
        pokemonType === 'rock' && targetProps === 'text',
      'text-pokemon-type-bug': pokemonType === 'bug' && targetProps === 'text',
      'text-pokemon-type-ghost':
        pokemonType === 'ghost' && targetProps === 'text',
      'text-pokemon-type-steel':
        pokemonType === 'steel' && targetProps === 'text',
      'text-pokemon-type-grass':
        pokemonType === 'grass' && targetProps === 'text',
      'text-pokemon-type-fire':
        pokemonType === 'fire' && targetProps === 'text',
      'text-pokemon-type-water':
        pokemonType === 'water' && targetProps === 'text',
      'text-pokemon-type-electric':
        pokemonType === 'electric' && targetProps === 'text',
      'text-pokemon-type-psychic':
        pokemonType === 'psychic' && targetProps === 'text',
      'text-pokemon-type-ice': pokemonType === 'ice' && targetProps === 'text',
      'text-pokemon-type-dragon':
        pokemonType === 'dragon' && targetProps === 'text',
      'text-pokemon-type-dark':
        pokemonType === 'dark' && targetProps === 'text',
      'text-pokemon-type-fairy':
        pokemonType === 'fairy' && targetProps === 'text',
    };
  }
}
