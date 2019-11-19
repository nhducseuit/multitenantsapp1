import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { ColumnChartComponent } from './charts/column-chart/column-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    ColumnChartComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    ColumnChartComponent
  ]
})
export class DashboardModule { }
