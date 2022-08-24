import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.heroService
      .getPokemon(name)
      .subscribe((pokemon) => (this.pokemon = pokemon));
  }

  goBack(): void {
    this.location.back();
  }
}
