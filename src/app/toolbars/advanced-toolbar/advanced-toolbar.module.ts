import { NgModule, Type } from '@angular/core';
import { AdvancedToolbarComponent } from './advanced-toolbar.component';
import { AdvancedTogglersComponent } from './advanced-togglers.component';
import { AdvancedButtonsComponent } from './advanced-buttons.component';
import { AdvancedSlidersComponent } from './advanced-sliders.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    AdvancedToolbarModule.rootComponent,
    AdvancedTogglersComponent,
    AdvancedButtonsComponent,
    AdvancedSlidersComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [
    AdvancedToolbarModule.rootComponent
  ]
})
export class AdvancedToolbarModule {
  static rootComponent: Type<any> = AdvancedToolbarComponent;
}
