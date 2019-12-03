import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <mat-form-field>
    <mat-select [placeholder]="placeholder" formControlName="formControlName">
      <mat-option *ngFor="let item of options" [value]="item">{{item}}</mat-option>
    </mat-select>
    <!-- Possible to insert errors notifications -->
  </mat-form-field>
  `,
  styles: [

  ]
})
export class SelectComponent implements OnInit {

  public config: any;

  constructor() { }

  ngOnInit() {
  }

  get placeholder() {
    return this.config.placeholder;
  }

  get formControlName() {
    return this.config.formControlName;
  }

  get options() {
    return this.options;
  }

}
