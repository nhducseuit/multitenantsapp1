import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { InputComponent } from './inputs/input.component';
import { SharedMaterialModule } from '../shared-material.module';
import { SelectComponent } from './inputs/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { SharedModule } from '../shared/shared.module';
import { FormInputDirective } from './form-input.directive';


@NgModule({
  declarations: [RegistrationComponent, InputComponent, SelectComponent, FormInputDirective],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    SharedModule,
    SharedMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [RegistrationService],
  entryComponents: [InputComponent, SelectComponent]
})
export class RegistrationModule { }
