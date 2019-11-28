import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { VcrHostDirective } from 'src/app/shared/directives/vcr-host.directive';
import { LoadModuleDirective } from 'src/app/shared/directives/load-module.directive';
import { TenantAwaredItem } from 'src/app/shared/interfaces/tenant-awared-item.interface';
import { TenantAwared } from 'src/app/shared/interfaces/tenant-awared.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tenantData: any;
  chartItems: TenantAwaredItem[];
  configuredModule: string;
  toolbarOpened = false;

  @ViewChild(VcrHostDirective, { static: true }) vcrHost: VcrHostDirective;
  @ViewChild(LoadModuleDirective, {static: false }) moduleLazyLoader: LoadModuleDirective;

  constructor(
    private dashboardService: DashboardService,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.tenantData = JSON.parse(localStorage.getItem('tenant'));
    const tenantId = this.tenantData.id;
    this.dashboardService.getDashboardConfigForTenant(tenantId).subscribe(tenantConfig => {
      this.chartItems = this.dashboardService.getConfiguredChartItem(tenantConfig, this.tenantData);
      this.initCharts();
      this.configuredModule = this.dashboardService.getConfiguredToolbar(tenantConfig);
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

  openToolbar() {
    this.toolbarOpened = !this.toolbarOpened;
  }

}
