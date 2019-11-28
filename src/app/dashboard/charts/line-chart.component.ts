import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-line-chart',
  template: `
  <p class="chart">
    This is a LINE chart of tenant {{ tenantData.name }}
  </p>
  `
})
export class LineChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
