import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';
import { SharedModule } from '../shared/shared.module';
import { SharedMaterialModule } from '../shared-material.module';
import { LineChartComponent } from './charts/line-chart.component';
import { PieChartComponent } from './charts/pie-chart.component';
import { BarChartComponent } from './charts/bar-chart.component';
import { ColumnChartComponent } from './charts/column-chart.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    ColumnChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    SharedMaterialModule
  ],
  entryComponents: [
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    ColumnChartComponent
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule { }
