import { Component, OnInit } from '@angular/core';
import { TenantAwared } from 'src/app/shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-bar-chart',
  template: `
  <p class="chart">
    This is a BAR chart of tenant {{ tenantData.name }}
  </p>
  `
})
export class BarChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
