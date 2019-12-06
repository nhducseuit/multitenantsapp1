import { TenantAwared } from '../shared/interfaces/tenant-awared.interface';
import { FormGroup } from '@angular/forms';

export interface TenantAwaredInput extends TenantAwared {
  formGroup: FormGroup;
}
