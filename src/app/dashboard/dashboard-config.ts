import { Type } from '@angular/core';
import { BarChartComponent } from './charts/bar-chart.component';
import { ColumnChartComponent } from './charts/column-chart.component';
import { LineChartComponent } from './charts/line-chart.component';
import { PieChartComponent } from './charts/pie-chart.component';

export type Charts = 'pie' | 'column' | 'line' | 'bar';
export type Toolbars = 'lite' | 'advanced';

export const DASHBOARD_TYPE_NAME_MAPPING: Map<Charts, Type<any>> = new Map([
  ['bar', BarChartComponent],
  ['column', ColumnChartComponent],
  ['line', LineChartComponent],
  ['pie', PieChartComponent]
]);

export const DASHBOARD_TOOLBAR_TYPE_NAME_MAPPING: Map<Toolbars, string> = new Map([
  ['lite', 'liteToolbar'],
  ['advanced', 'advancedToolbar'],
]);

export interface DashboardConfig {
  charts?: Charts[];
  toolbar?: Toolbars;
}
