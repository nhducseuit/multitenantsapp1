import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lite-toolbar',
  template: `
    <mat-expansion-panel expanded="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Lite action buttons
        </mat-panel-title>
      </mat-expansion-panel-header>
      <app-lite-buttons></app-lite-buttons>
    </mat-expansion-panel>
    <mat-expansion-panel expanded="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Lite togglers
        </mat-panel-title>
      </mat-expansion-panel-header>
      <app-lite-togglers></app-lite-togglers>
    </mat-expansion-panel>
  `
})
export class LiteToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
