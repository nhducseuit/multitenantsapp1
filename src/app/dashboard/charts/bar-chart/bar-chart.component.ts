import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../tenant-awared.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
