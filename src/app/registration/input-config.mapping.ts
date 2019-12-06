import { Inputs, ValidatorNames } from './input-config.interface';
import { Type, Input, Component } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { InputComponent } from './inputs/input.component';
import { SelectComponent } from './inputs/select.component';

export const INPUT_TYPE_TO_COMPONENT_MAPPINGS: { [key in Inputs]: Type<any> } = {
  input: InputComponent,
  select: SelectComponent,
  datepicker: InputComponent
};

export const VALIDATOR_NAME_TO_INSTANCE_MAPPINGS = (name: ValidatorNames, parameters?: any): ValidatorFn => {
  switch (name) {
    case 'required':
      return Validators.required;
    case 'number':
      return Validators.pattern('^(0|[1-9][0-9]*)$');
    case 'email':
      return Validators.email;
    case 'regex':
      return parameters ? Validators.pattern(parameters.pattern) : null;
    default: return null;
  }
};
