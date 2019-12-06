import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-line-chart',
  template: `
  <p class="chart">
    This is a LINE chart of tenant {{ config.name }}
  </p>
  `
})
export class LineChartComponent implements OnInit, TenantAwared {
  config: any;

  constructor() { }

  ngOnInit() {
  }

}
