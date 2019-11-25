import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lite-buttons',
  template: `
  <div class="button-group">
    <button mat-icon-button color="primary" aria-label="Favorite button">
      <mat-icon>favorite</mat-icon>
    </button>
    <button mat-icon-button color="primary" aria-label="Favorite button">
      <mat-icon>3d_rotation</mat-icon>
    </button>
    <button mat-icon-button color="accent" aria-label="Accessibility button">
      <mat-icon>accessibility</mat-icon>
    </button>
    <button mat-icon-button color="accent" aria-label="Build button">
      <mat-icon>build</mat-icon>
    </button>
    <button mat-icon-button color="warning" aria-label="Cache button">
      <mat-icon>cached</mat-icon>
    </button>
    <button mat-icon-button color="warning" aria-label="Backup button">
      <mat-icon>backup</mat-icon>
    </button>
  </div>
  `,
  styles: [
    `
      .button-group {
        display: flex;
        flex-wrap: wrap;
        > * {
          margin: 0 16px;
        }
      }
    `
  ]
  // templateUrl: './lite-buttons.component.html',
  // styleUrls: ['./lite-buttons.component.scss']
})
export class LiteButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
