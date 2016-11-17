import { Component, OnInit, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'HeroDetail.component.html'
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero:Hero;
    
    constructor() { }

    ngOnInit() { }
}