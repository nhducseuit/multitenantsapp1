import { Injectable } from '@angular/core';
import { InputConfig } from './input-config.interface';
import { TenantAwaredItem } from '../shared/interfaces/tenant-awared-item.interface';
import { INPUT_TYPE_TO_COMPONENT_MAPPINGS, VALIDATOR_NAME_TO_INSTANCE_MAPPINGS } from './input-config.mapping';

const KMU_REGISTRATION_FORM_CONFIG: InputConfig[] = [
  {
    inputType: 'input',
    formControlName: 'username',
    placeholder: 'User name',
    validators: [
      {
        validatorName: 'required',
        errorName: 'required'
      }
    ]
  },
  {
    inputType: 'input',
    formControlName: 'password',
    placeholder: 'Password',
    password: true,
    validators: [
      {
        validatorName: 'required',
        errorName: 'required'
      }
    ]
  },
  {
    inputType: 'select',
    formControlName: 'gender',
    placeholder: 'Gender',
    validators: [
      {
        validatorName: 'required',
        errorName: 'required'
      }
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
      {
        validatorName: 'required',
        errorName: 'required'
      }
    ],
    options: [
      'K1',
      'K2',
      'K3'
    ]
  },
  {
    inputType: 'input',
    formControlName: 'email',
    placeholder: 'Email',
    validators: [
      {
        validatorName: 'required',
        errorName: 'required'
      },
      {
        validatorName: 'email',
        errorName: 'email'
      }
    ]
  },
  {
    inputType: 'input',
    formControlName: 'password',
    placeholder: 'Password',
    password: true,
    validators: [
      {
        validatorName: 'required',
        errorName: 'required'
      }
    ]
  },
  {
    inputType: 'input',
    formControlName: 'phoneNumber',
    placeholder: 'Phone Number',
    validators: [
      {
        validatorName: 'required',
        errorName: 'required'
      },
      {
        validatorName: 'regex',
        errorName: 'pattern',
        parameters: {
          pattern: '^0(1\\d{9}|9\\d{8})$'
        }
      }
    ]
  }
];

@Injectable()
export class RegistrationService {

  public getRegistrationFormConfig(tenantId: string): Promise<InputConfig[]> {
    return tenantId === 'uit' ? Promise.resolve(UIT_REGISTRATION_FORM_CONFIG) : Promise.resolve(KMU_REGISTRATION_FORM_CONFIG);
  }

  public getConfiguredFormInputs(inputConfigs: InputConfig[]): TenantAwaredItem[] {
    return inputConfigs
    .map(config => {
      config.validators.forEach(validator => {
        validator.validatorFn = VALIDATOR_NAME_TO_INSTANCE_MAPPINGS(validator.validatorName, validator.parameters);
      });
      return config;
    })
    .map(config => {
      return {
        component: INPUT_TYPE_TO_COMPONENT_MAPPINGS[config.inputType],
        data: config
      };
    });
  }

}
