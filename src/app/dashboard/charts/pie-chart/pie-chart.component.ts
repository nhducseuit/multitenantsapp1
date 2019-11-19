import { Component, OnInit } from '@angular/core';
import { TenantAwared } from '../../tenant-awared.interface';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, TenantAwared {
  tenantData: any;

  constructor() { }

  ngOnInit() {
  }

}
