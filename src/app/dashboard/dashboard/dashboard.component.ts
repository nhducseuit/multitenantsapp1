import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { VcrHostDirective } from '../vcr-host.directive';
import { ChartItem } from '../chart-item.interface';
import { TenantAwared } from '../tenant-awared.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tenantData: any;
  chartItems: ChartItem[];

  @ViewChild(VcrHostDirective, { static: true }) vcrHost: VcrHostDirective;

  constructor(
    private dashboardService: DashboardService,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.tenantData = JSON.parse(localStorage.getItem('tenant'));
    const tenantId = this.tenantData.id;
    this.dashboardService.getDashboardConfigForTenant(tenantId).subscribe(tenantConfig => {
      this.chartItems = this.dashboardService.mapDashboardConfigToItem(tenantConfig, this.tenantData);
      this.initCharts();
    });
  }

  initCharts() {
    this.vcrHost.vcr.clear();
    // Order is maintained
    this.chartItems.forEach(chartItem => {
      if (chartItem.component) {
        const chartComponent = this.cfr.resolveComponentFactory(chartItem.component);
        const chartComponentRef = this.vcrHost.vcr.createComponent(chartComponent);
        (chartComponentRef.instance as TenantAwared).tenantData = chartItem.data;
      }
    });
  }

}
