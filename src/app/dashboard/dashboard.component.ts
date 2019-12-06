import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { VcrHostDirective } from '../shared/directives/vcr-host.directive';
import { LoadModuleDirective } from '../shared/directives/load-module.directive';
import { TenantAwaredItem } from '../shared/interfaces/tenant-awared-item.interface';
import { TenantAwared } from '../shared/interfaces/tenant-awared.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  template: `
  <mat-sidenav-container>
    <mat-sidenav #sideNav mode="side" [(opened)]="toolbarOpened">
      <ng-template [loadModule]="configuredModule"></ng-template>
    </mat-sidenav>
    <mat-sidenav-content>
      <h2>This is a customizable dashboard for {{ tenantConfig.name | uppercase }}</h2>
      <ng-template vcrHost></ng-template>
      <div class="action-buttons">
        <button mat-raised-button (click)="openToolbar()">{{ sideNav.opened ? 'Close' : 'Open' }} toolbar</button>
        <button mat-raised-button color="accent" (click)="goBack()">Back to LOGIN page</button>
      </div>
    </mat-sidenav-content>
  </mat-sidenav-container>
  `,
  styles: [
    `
      .mat-drawer-content {
        height: 100vh;
      }
      .action-buttons {
        display: flex;
        margin-top: 2rem;
        > * {
          margin-left: 1rem;
        }
      }
    `
  ]
})
export class DashboardComponent implements OnInit {

  tenantConfig: any;
  chartItems: TenantAwaredItem[];
  configuredModule: string;
  toolbarOpened = false;

  @ViewChild(VcrHostDirective, { static: true }) vcrHost: VcrHostDirective;
  @ViewChild(LoadModuleDirective, {static: false }) moduleLazyLoader: LoadModuleDirective;

  constructor(
    private dashboardService: DashboardService,
    private cfr: ComponentFactoryResolver,
    private router: Router,
  ) { }

  ngOnInit() {
    this.tenantConfig = JSON.parse(localStorage.getItem('tenant'));
    const tenantId = this.tenantConfig.id;
    this.dashboardService.getDashboardConfigForTenant(tenantId).subscribe(tenantConfig => {
      this.chartItems = this.dashboardService.getConfiguredChartItem(tenantConfig, this.tenantConfig);
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
        (chartComponentRef.instance as TenantAwared).config = chartItem.data;
      }
    });
  }

  openToolbar() {
    this.toolbarOpened = !this.toolbarOpened;
  }

  goBack() {
    this.router.navigate(['login']);
  }
}
