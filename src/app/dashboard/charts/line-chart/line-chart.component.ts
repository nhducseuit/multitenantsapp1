import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../tenant-awared.interface';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
