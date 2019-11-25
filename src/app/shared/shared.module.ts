import { NgModule } from '@angular/core';

import { VcrHostDirective } from './directives/vcr-host.directive';
import { LoadModuleDirective } from './directives/load-module.directive';



@NgModule({
  imports: [
  ],
  declarations: [
    VcrHostDirective,
    LoadModuleDirective
  ],
  exports: [
    VcrHostDirective,
    LoadModuleDirective
  ]
})
export class SharedModule { }
