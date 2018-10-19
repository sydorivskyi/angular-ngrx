import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './search.reducer';

export const getState = createFeatureSelector<State>('search');

export const getSearchQuery = createSelector(getState, state => state.query);
export const getSearchResults = createSelector(getState, state => state.results);
export const getActiveDrink = createSelector(getState, state => state.results);
export const getIngredients = createSelector(getState, state => state.ingredients);
export const getFavourites = createSelector(getState, state => state.fav);
