import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { NameUrl } from '../models/base-name-url';
import { Pokemon } from '../models/pokemon-details';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getAllPokemonTypeList(): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}type`)
      .pipe(map((x: any) => x.results));
  }

  getPokemonBasedOnType(type: string): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}type/${type}`)
      .pipe(
        map((res: any) => res.pokemon.map((pokemon: any) => pokemon.pokemon))
      );
  }

  getPokemonList(offset: number, limit: number): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`)
      .pipe(map((res: any) => res.results));
  }

  getPokemonFromUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url).pipe(
      map((res: any) => ({
        id: res.id,
        name: res.name,
        url: url,
        details: {
          imageUrl: res.sprites.front_default,
          types: res.types.map((type: any) => type.type.name),
          stats: res.stats.map((stat: any) => ({
            name: stat.stat.name,
            base: stat.base_stat,
          })),
          abilitiesName: res.abilities.map(
            (ability: any) => ability.ability.name
          ),
          height: res.height,
          weight: res.weight,
        },
      }))
    );
  }

  getPokemonDetails(offset: number, limit: number): Observable<Pokemon[]> {
    return this.getPokemonList(offset, limit).pipe(
      mergeMap((res: any) => {
        const fetchObsList: [Observable<Pokemon>] = res.map((pokemon: any) =>
          this.getPokemonFromUrl(pokemon.url)
        );
        return forkJoin<Pokemon>(fetchObsList);
      })
    );
  }
}
