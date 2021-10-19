import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from 'src/app/models/pokemon-details';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon: Pokemon | any;

  constructor(
    private pokedexService: PokedexService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    location.onUrlChange((url) => {
      let splittedUrl = url.split('/');
      this.getPokemonFromName(splittedUrl[splittedUrl.length - 1]);
    });
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pokemonNameParams = routeParams.get('pokemonName');
    this.getPokemonFromName(pokemonNameParams);
  }

  getPokemonFromName(pokemonName: any): void {
    this.pokedexService
      .getPokemonFromName(pokemonName)
      .subscribe((pokemonDetail) => (this.pokemon = pokemonDetail));
  }
}
