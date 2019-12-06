import { NgModule } from '@angular/core';

import { VcrHostDirective } from './directives/vcr-host.directive';
import { LoadModuleDirective } from './directives/load-module.directive';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material.module';



@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule
  ],
  declarations: [
    VcrHostDirective,
    LoadModuleDirective
  ],
  exports: [
    CommonModule,
    SharedMaterialModule,
    VcrHostDirective,
    LoadModuleDirective
  ]
})
export class SharedModule { }
