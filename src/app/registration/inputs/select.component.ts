import { Component, OnInit } from '@angular/core';
import { TenantAwaredInput } from '../tenant-awared-input.interface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  template: `
  <mat-form-field [formGroup]="formGroup">
    <mat-select [placeholder]="placeholder" [formControlName]="formControlName">
      <mat-option *ngFor="let item of options" [value]="item">{{item}}</mat-option>
    </mat-select>
    <!-- Possible to insert errors notifications -->
    <ng-container *ngFor="let validatorConfig of config.validators">
      <mat-error
        *ngIf="formControl.hasError(validatorConfig.errorName)  && formControl.touched">
        Error: input is {{validatorConfig.errorName}}
      </mat-error>
    </ng-container>
  </mat-form-field>
  `,
  styles: []
})
export class SelectComponent implements OnInit, TenantAwaredInput {
  formGroup: import('@angular/forms').FormGroup;
  config: any;

  constructor() { }

  ngOnInit() {
  }

  get placeholder() {
    return this.config.placeholder;
  }

  get formControlName() {
    return this.config.formControlName;
  }

  get formControl(): FormControl {
    return this.formGroup.get(this.formControlName) as FormControl;
  }

  get options() {
    return this.config.options;
  }

}
