import { Component, OnInit } from '@angular/core';
import { TenantAwaredInput } from '../tenant-awared-input.interface';
import { ValidatorConfig } from '../input-config.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
  <mat-form-field [formGroup]="formGroup">
    <input matInput [type]="inputType" [placeholder]="placeholder" [formControlName]="formControlName">
    <!-- Possible to insert errors notifications -->
    <ng-container *ngFor="let validatorConfig of config.validators">
      <mat-error
        *ngIf="formControl.hasError(validatorConfig.errorName) && formControl.touched">
        Error: input is {{validatorConfig.errorName}}
      </mat-error>
    </ng-container>
  </mat-form-field>
  `,
  styles: [

  ]
})
export class InputComponent implements OnInit, TenantAwaredInput {
  formGroup: import('@angular/forms').FormGroup;
  config: any;

  constructor() { }

  ngOnInit() {
  }

  get placeholder(): string {
    return this.config.placeholder;
  }

  get formControlName(): string {
    return this.config.formControlName;
  }

  get formControl(): FormControl {
    return this.formGroup.get(this.formControlName) as FormControl;
  }

  get validatorNames() {
    return (this.config.validators as ValidatorConfig[]).map(validator => validator.validatorName);
  }

  get inputType() {
    return this.config.password ? 'password' : 'text';
  }

}
