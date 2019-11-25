import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lite-togglers',
  template: `
    <div class="toggler-group">
      <mat-slide-toggle>Slide me!</mat-slide-toggle>
      <mat-slide-toggle>Simple slider!</mat-slide-toggle>
      <mat-slide-toggle>Slider ftw!</mat-slide-toggle>
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
  // templateUrl: './lite-togglers.component.html',
  // styleUrls: ['./lite-togglers.component.scss']
})
export class LiteTogglersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
