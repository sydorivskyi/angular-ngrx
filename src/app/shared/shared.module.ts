import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MatButtonModule, } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const sharedModules = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatCardModule,
];

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
  declarations: []
})
export class SharedModule {
}
