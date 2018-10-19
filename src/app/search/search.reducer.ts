import { InjectionToken } from '@angular/core';
import { Drink } from '../core/entity/drink';
import { Ingredient } from '../core/entity/ingredient';
import * as actions from '../store/actions/search.actions';

export interface State {
  loading: boolean;
  query: string;
  results: Drink[];
  fav: Drink[];
  ingredients: Ingredient[];
  ingredientsLoaded: boolean;
}

export const initialState: State = {
  query: '',
  loading: false,
  results: [],
  fav: [],
  ingredients: [],
  ingredientsLoaded: false,
};

export const reducer = (state: State = initialState, action: actions.All) => {
  switch (action.type) {
    case actions.SEARCH: {
      return {...state, loading: true, query: action.payload};
    }
    case actions.SEARCH_SUCCESS: {
      return {...state, loading: false, results: action.payload};
    }
    case actions.LOAD_INGREDIENTS: {
      return {...state, ingredientsLoaded: false};
    }
    case actions.LOAD_INGREDIENTS_SUCCESS: {
      return {...state, ingredientsLoaded: true, ingredients: action.payload};
    }
    case actions.ADD_TO_FAVOURITES: {
      return {...state, fav: [...state.fav, action.payload]};
    }
    default: {
      return state;
    }
  }
};

export const reducerToken = new InjectionToken('SearchReducer');
