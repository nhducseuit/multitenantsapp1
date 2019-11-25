import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-sliders',
  template: `
  <div class="slider-group">
    <mat-slider thumbLabel tickInterval="1" value="1"></mat-slider>
    <mat-slider thumbLabel tickInterval="1" value="55"></mat-slider>
    <mat-slider thumbLabel tickInterval="1" value="15"></mat-slider>
  </div>
  `,
  styles: [
    `
      .button-group {
        display: flex;
        flex-direction: column;
        > * {
          margin: 0 16px;
        }
      }
    `
  ]
})
export class AdvancedSlidersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
