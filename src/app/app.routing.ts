import { Route } from '@angular/router';

export const routes: Route[] = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', loadChildren: './search/search.module#SearchModule'}
];
