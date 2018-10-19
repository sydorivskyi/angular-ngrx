import { Action } from '@ngrx/store';
import { Drink } from '../../core/entity/drink';
import { Ingredient } from '../../core/entity/ingredient';

export const SEARCH = 'START_SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const LOAD_INGREDIENTS = 'LOAD_INGREDIENTS';
export const LOAD_INGREDIENTS_SUCCESS = 'LOAD_INGREDIENTS_SUCCESS';
export const LOAD_INGREDIENTS_FAIL = 'LOAD_INGREDIENTS_FAIL';

export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';

export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {}
}
export class SearchSuccess implements Action {
  readonly type = SEARCH_SUCCESS;
  constructor(public payload: Drink[]) {}
}
export class SearchFail implements Action {
  readonly type = SEARCH_FAIL;
  constructor(public payload: string) {}
}

export class LoadIngredients implements Action {
  readonly type = LOAD_INGREDIENTS;
  constructor() {}
}
export class LoadIngredientsSuccess implements Action {
  readonly type = LOAD_INGREDIENTS_SUCCESS;
  constructor(public payload: Ingredient[]) {}
}
export class LoadIngredientsFail implements Action {
  readonly type = LOAD_INGREDIENTS_FAIL;
  constructor(public payload: string) {}
}

export class AddToFavourites implements Action {
  readonly type = ADD_TO_FAVOURITES;
  constructor(public payload: Drink) {}
}

export type All =
  | Search
  | SearchSuccess
  | SearchFail
  | LoadIngredients
  | LoadIngredientsSuccess
  | LoadIngredientsFail
  | AddToFavourites
  ;
