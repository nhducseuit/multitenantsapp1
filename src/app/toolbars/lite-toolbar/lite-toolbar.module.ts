import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../../shared-material.module';
import { LiteToolbarComponent } from './lite-toolbar.component';
import { LiteButtonsComponent } from './lite-buttons.component';
import { LiteTogglersComponent } from './lite-togglers.component';



@NgModule({
  declarations: [
    LiteToolbarModule.rootComponent,
    LiteButtonsComponent,
    LiteTogglersComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  entryComponents: [LiteToolbarModule.rootComponent]
})
export class LiteToolbarModule {
  static rootComponent = LiteToolbarComponent;
}
