import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-togglers',
  template: `
    <div class="toggler-group">
      <mat-slide-toggle>Complex slider!</mat-slide-toggle>
      <mat-slide-toggle>Slide me!</mat-slide-toggle>
      <mat-slide-toggle>Tick tick</mat-slide-toggle>
      <mat-checkbox>Toggle me!</mat-checkbox>
      <mat-slide-toggle>Sờ lai đờ</mat-slide-toggle>
    </div>
  `,
  styles: [
    `
      .toggler-group {
        display: flex;
        flex-direction: column;
        > * {
          margin: 16px;
        }
      }
    `
  ]
})
export class AdvancedTogglersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
