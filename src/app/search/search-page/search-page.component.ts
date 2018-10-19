import { AddToFavourites } from './../../store/actions/search.actions';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map } from 'rxjs/operators';
import { LoadIngredients, Search } from '../../store/actions/search.actions';
import { AppState } from '../../store/reducers';
import { getSearchQuery, getSearchResults, getFavourites } from '../search.selector';
import { Drink } from '../../core/entity/drink';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  @ViewChild('query') queryInput: ElementRef<HTMLInputElement>;

  results$ = this.store.pipe(select(getSearchResults));
  fav$ = this.store.pipe(select(getFavourites));
  query$ = this.store.pipe(select(getSearchQuery));
  ingredients$ = this.store.pipe(select(getSearchQuery));

  constructor(private store: Store<AppState>) {
    this.store.dispatch(new LoadIngredients());
  }

  ngOnInit() {
    fromEvent(this.queryInput.nativeElement, 'keyup').pipe(
      debounceTime(100),
      map(() => this.queryInput.nativeElement.value),
      filter(value => value.length > 0),
    ).subscribe((value) => {
      this.store.dispatch(new Search(value));
    });
  }

  onAddToFav(item: Drink) {
    this.store.dispatch(new AddToFavourites(item));
  }
}
