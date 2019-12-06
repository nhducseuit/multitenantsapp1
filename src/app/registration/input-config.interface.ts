import { ValidatorFn } from '@angular/forms';

export type Inputs = 'input' | 'select' | 'datepicker';
export type ValidatorNames = 'required' | 'number' | 'email' | 'regex';

export interface ValidatorConfig {
  validatorName: ValidatorNames;
  errorName: string;
  parameters?: any;
  validatorFn?: ValidatorFn;
}

export interface InputConfig {
  inputType: Inputs;
  formControlName: string;
  placeholder: string;
  validators: ValidatorConfig[];
  password?: boolean;
  options?: string[];
}
