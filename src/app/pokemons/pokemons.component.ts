import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
  // selectedPokemon?: Pokemon;
  pokemons: Pokemon[] = [];

  constructor(
    private heroService: HeroService
  ) // private messageService: MessageService
  {}

  ngOnInit(): void {
    this.getPokemons();
  }

  // onSelect(pokemon: Pokemon): void {
  //   this.selectedPokemon = pokemon;
  //   this.messageService.add(
  //     `PokemonsComponent: Selected pokemon name=${pokemon.name}`
  //   );
  // }

  getPokemons(): void {
    this.heroService.getPokemons().subscribe((pokemons: any) => {
      this.pokemons = pokemons.results;
    });
    // .subscribe((pokemons: any) => (this.pokemons = pokemons));
  }
}
