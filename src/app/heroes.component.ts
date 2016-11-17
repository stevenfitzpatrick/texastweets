import { Component } from '@angular/core';
import '../../public/css/styles.css';
import { Hero } from './hero';
import { HeroService} from './hero.service';
import { OnInit} from '@angular/core';

@Component({
  selector: 'my-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes" 
      (click)="onSelect(hero)" 
      [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
  styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit{
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes : Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroService
  ){}

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  } 
}