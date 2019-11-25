import { Component, OnInit } from '@angular/core';
import { TenantAwared } from 'src/app/shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-column-chart',
  template: `
  <p class="chart">
    This is a COLUMN chart of tenant {{ tenantData.name }}
  </p>
  `
})
export class ColumnChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
