import { Injectable } from '@angular/core';

export type InputTypes = 'input' | 'select';
export type ValidatorNames = 'required' | 'number' | 'currency' | 'phonenumber';

export interface InputConfig {
  inputType: InputTypes;
  formControlName: string;
  placeholder: string;
  validators: ValidatorNames[];
  password?: boolean;
  options?: string[];
}

const KMU_REGISTRATION_FORM_CONFIG: InputConfig[] = [
  {
    inputType: 'input',
    formControlName: 'username',
    placeholder: 'User name',
    validators: [
      'required'
    ]
  },
  {
    inputType: 'input',
    formControlName: 'password',
    placeholder: 'Password',
    password: true,
    validators: [
      'required'
    ]
  },
  {
    inputType: 'select',
    formControlName: 'gender',
    placeholder: 'Gender',
    validators: [
      'required'
    ],
    options: [
      'male',
      'female',
      'other'
    ]
  }
];

const UIT_REGISTRATION_FORM_CONFIG: InputConfig[] = [
  {
    inputType: 'select',
    formControlName: 'class',
    placeholder: 'Class',
    validators: [
      'required'
    ],
    options: [
      'K1',
      'K2',
      'K3'
    ]
  },
  {
    inputType: 'input',
    formControlName: 'phoneNumber',
    placeholder: 'Phone Number',
    validators: [
      'required', 'phonenumber'
    ]
  },
  {
    inputType: 'input',
    formControlName: 'password',
    placeholder: 'Password',
    password: true,
    validators: [
      'required'
    ]
  }
]

@Injectable()
export class RegistrationService {

  public getRegistrationFormConfig(tenantId: string) {
    return tenantId === 'uit' ? UIT_REGISTRATION_FORM_CONFIG : KMU_REGISTRATION_FORM_CONFIG;
  }

}
