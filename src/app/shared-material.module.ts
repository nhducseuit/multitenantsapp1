import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatExpansionModule,
  MatSidenavModule,
  MatInputModule,
  MatDividerModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatExpansionModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatInputModule,
    MatDividerModule
  ]
})
export class SharedMaterialModule { }
