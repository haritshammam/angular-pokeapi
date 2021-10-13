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
  private getPokemonUrl: string = `${this.baseUrl}pokemon/?offset=0&limit=20`;

  constructor(private http: HttpClient) {}

  getPokemonType(type: string = ''): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}type/${type}`)
      .pipe(map((x: any) => x.results));
  }

  getPokemonList(
    offset: number = 0,
    limit: number = 20
  ): Observable<NameUrl[]> {
    return this.http
      .get<NameUrl[]>(`${this.baseUrl}pokemon/?offset=${offset}&limit=${limit}`)
      .pipe(map((res: any) => res.results));
  }

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
