import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-buttons',
  template: `
  <div class="button-group">
    <button mat-button>Basic</button>
    <button mat-button color="primary">Primary</button>
    <button mat-icon-button color="primary" aria-label="Favorite button">
      <mat-icon>3d_rotation</mat-icon>
    </button>
    <button mat-icon-button color="accent" aria-label="Accessibility button">
      <mat-icon>accessibility</mat-icon>
    </button>
    <button mat-raised-button disabled>Disabled</button>
    <button mat-icon-button color="warning" aria-label="Cache button">
      <mat-icon>cached</mat-icon>
    </button>
    <a mat-flat-button routerLink=".">Link</a>
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
export class AdvancedButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
