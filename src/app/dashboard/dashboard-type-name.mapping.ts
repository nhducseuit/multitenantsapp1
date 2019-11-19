import { Type } from '@angular/core';
import { Charts } from './dashboard-config.interface';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';

export const DASHBOARD_TYPE_NAME_MAPPING: Map<Charts, Type<any>> = new Map([
  ['bar', BarChartComponent],
  ['column', ColumnChartComponent],
  ['line', LineChartComponent],
  ['pie', PieChartComponent]
]);
