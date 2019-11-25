import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-toolbar',
  template: `
    <mat-expansion-panel expanded="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Advanced action buttons
        </mat-panel-title>
      </mat-expansion-panel-header>
      <app-advanced-buttons></app-advanced-buttons>
    </mat-expansion-panel>
    <mat-expansion-panel expanded="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Advanced sliders
        </mat-panel-title>
      </mat-expansion-panel-header>
      <app-advanced-sliders></app-advanced-sliders>
    </mat-expansion-panel>
    <mat-expansion-panel expanded="true">
      <mat-expansion-panel-header>
        <mat-panel-title>
          Advanced togglers
        </mat-panel-title>
      </mat-expansion-panel-header>
      <app-advanced-togglers></app-advanced-togglers>
    </mat-expansion-panel>
  `
})
export class AdvancedToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
