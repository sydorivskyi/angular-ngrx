import { Drink } from './../../core/entity/drink';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  @Input() items: Drink[];

  constructor() {}

  ngOnInit() {}

}
