import { NgModule } from '@angular/core';
import { LiteToolbarComponent } from './lite-toolbar.component';
import { LiteButtonsComponent } from './lite-buttons.component';
import { LiteTogglersComponent } from './lite-togglers.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LiteToolbarModule.rootComponent,
    LiteButtonsComponent,
    LiteTogglersComponent
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [LiteToolbarModule.rootComponent]
})
export class LiteToolbarModule {
  static rootComponent = LiteToolbarComponent;
}
