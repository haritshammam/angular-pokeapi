import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pokemonNameParams = routeParams.get('pokemonName');
    this.getPokemonFromName(pokemonNameParams);
  }

  getPokemonFromName(pokemonName: any): void {
    this.pokedexService
      .getPokemonFromName(pokemonName)
      .subscribe((pokemonDetail) => this.pokemon = pokemonDetail);
      // .subscribe((pokemonDetail) => (this.pokemon = pokemonDetail));
  }
}
