import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Poketype } from '../models/poketype';

@Injectable({
  providedIn: 'root',
})
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getPokemonType(type: string = ""): Observable<Poketype[]> {
    return this.http
      .get<Poketype[]>(this.baseUrl + 'type/' + type)
      .pipe(map((x: any) => x.results));
  }
}
