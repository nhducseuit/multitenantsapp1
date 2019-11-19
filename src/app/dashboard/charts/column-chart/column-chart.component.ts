import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../tenant-awared.interface';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
