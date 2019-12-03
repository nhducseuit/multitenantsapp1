import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <mat-form-field>
    <input matInput [placeholder]="placeholder" formControlName="formControlName">
    <!-- Possible to insert errors notifications -->
  </mat-form-field>
  `,
  styles: [

  ]
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
