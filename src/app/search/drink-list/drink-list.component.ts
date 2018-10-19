import { Drink } from './../../core/entity/drink';
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrinkListComponent implements OnInit {

  @Input() items: Drink[];
  @Input() isFavList = false;
  @Output() addToFav = new EventEmitter<Drink>();

  trackById = (drink: Drink) => drink.idDrink;

  constructor() { }

  ngOnInit() {}

  onAddToFav(item: Drink) {
    this.addToFav.emit(item);
  }
}
