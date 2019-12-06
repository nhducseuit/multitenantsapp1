import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-column-chart',
  template: `
  <p class="chart">
    This is a COLUMN chart of tenant {{ config.name }}
  </p>
  `
})
export class ColumnChartComponent implements OnInit, TenantAwared {
  config: any;

  constructor() { }

  ngOnInit() {
  }

}
