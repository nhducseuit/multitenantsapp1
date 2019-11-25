import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedToolbarComponent } from './advanced-toolbar.component';
import { AdvancedTogglersComponent } from './advanced-togglers.component';
import { AdvancedButtonsComponent } from './advanced-buttons.component';
import { AdvancedSlidersComponent } from './advanced-sliders.component';
import { SharedMaterialModule } from 'src/app/shared-material.module';

@NgModule({
  declarations: [
    AdvancedToolbarModule.rootComponent,
    AdvancedTogglersComponent,
    AdvancedButtonsComponent,
    AdvancedSlidersComponent
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  entryComponents: [
    AdvancedToolbarModule.rootComponent
  ]
})
export class AdvancedToolbarModule {
  static rootComponent: Type<any> = AdvancedToolbarComponent;
}
