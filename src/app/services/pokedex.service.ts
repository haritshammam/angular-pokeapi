import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  getPokemonList(offset: number, limit: number): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`)
      .pipe(map((res: any) => res.results));
  }

  getPokemonFromUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  getPokemonBasedOnType(type: string): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}type/${type}`)
      .pipe(
        map((res: any) => res.pokemon.map((pokemon: any) => pokemon.pokemon))
      );
  }
}
