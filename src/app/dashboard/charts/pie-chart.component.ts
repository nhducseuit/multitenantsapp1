import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-pie-chart',
  template: `
  <p class="chart">
    This is a PIE chart of tenant {{ config.name }}
  </p>
  `
})
export class PieChartComponent implements OnInit, TenantAwared {
  config: any;

  constructor() { }

  ngOnInit() {
  }

}
