import { Component, OnInit } from '@angular/core';
import { TenantAwared } from 'src/app/shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-pie-chart',
  template: `
  <p class="chart">
    This is a PIE chart of tenant {{ tenantData.name }}
  </p>
  `
})
export class PieChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
