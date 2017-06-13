import { Component } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'Tour of Heroes';
    heroes = HEROES;
    // hero: Hero = {
    //     id: 1,
    //     name: 'Windstorm'
    // };
    selectedHero: Hero;
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    };
}
