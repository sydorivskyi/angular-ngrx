import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchEffects } from './search.effects';
import { reducer, reducerToken } from './search.reducer';
import { FavouritesComponent } from './favourites/favourites.component';
import { DrinkListComponent } from './drink-list/drink-list.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '', component: SearchPageComponent}
    ]),

    // IMPORT NGRX FEATURE MODULES
    StoreModule.forFeature('search', reducerToken),
    EffectsModule.forFeature([SearchEffects]),
  ],
  providers: [
    // to avoid AOT build issues
    {provide: reducerToken, useValue: reducer}
  ],
  declarations: [SearchPageComponent, FavouritesComponent, DrinkListComponent]
})
export class SearchModule {
}
