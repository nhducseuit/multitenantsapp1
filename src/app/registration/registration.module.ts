import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { InputComponent } from './inputs/input.component';
import { SharedMaterialModule } from '../shared-material.module';
import { SelectComponent } from './inputs/select.component';


@NgModule({
  declarations: [RegistrationComponent, InputComponent, SelectComponent],
  imports: [
    CommonModule,
    SharedMaterialModule,
    RegistrationRoutingModule
  ],
  entryComponents: [InputComponent, SelectComponent]
})
export class RegistrationModule { }
