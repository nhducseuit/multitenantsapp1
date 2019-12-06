import { Component, OnInit } from '@angular/core';
import { TenantAwared } from './../../shared/interfaces/tenant-awared.interface'

@Component({
  selector: 'app-bar-chart',
  template: `
  <p class="chart">
    This is a BAR chart of tenant {{ config.name }}
  </p>
  `
})
export class BarChartComponent implements OnInit, TenantAwared {
  config: any;

  constructor() { }

  ngOnInit() {
  }

}
