import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private _url: string = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getPokemon(name: string): Observable<Pokemon> {
    // const pokemon = this.http.get<Pokemon>(this._url);
    this.messageService.add(`HeroService: fetched pokemon name=${name}`);
    return this.http.get<Pokemon>(this._url);
  }

  getPokemons(): Observable<Pokemon[]> {
    this.messageService.add('HeroService: fetched pokemons');
    return this.http.get<Pokemon[]>(this._url);
  }

  // getPokemons() {
  //   this.messageService.add('HeroService: fetched pokemons');
  //   return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10
  //   `);
  // }
}
