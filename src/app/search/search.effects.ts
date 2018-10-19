import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Drink } from '../core/entity/drink';
import {
  LOAD_INGREDIENTS,
  LoadIngredientsFail,
  LoadIngredientsSuccess,
  Search,
  SEARCH,
  SearchFail,
  SearchSuccess
} from '../store/actions/search.actions';

@Injectable({providedIn: 'root'})
export class SearchEffects {
  @Effect() search$ = this.actions$.pipe(
    ofType<Search>(SEARCH),
    switchMap(action =>
      this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${action.payload}`).pipe(
        map((res: { drinks: Drink[] }) => new SearchSuccess(res.drinks)),
        catchError((err) => of(new SearchFail(err.message)))
      )
    )
  );

  @Effect() ingredients$ = this.actions$.pipe(
    ofType<Search>(LOAD_INGREDIENTS),
    switchMap(() =>
      this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`).pipe(
        map((res: { drinks: Drink[] }) => new LoadIngredientsSuccess(res.drinks)),
        catchError((err) => of(new LoadIngredientsFail(err.message)))
      )
    )
  );

  constructor(private actions$: Actions, private http: HttpClient) {
  }
}
