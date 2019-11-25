import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TenantAwaredItem } from '../shared/interfaces/tenant-awared-item.interface';
import { DashboardConfig, Charts, DASHBOARD_TYPE_NAME_MAPPING, DASHBOARD_TOOLBAR_TYPE_NAME_MAPPING } from './dashboard-config';

export const TENANT_KMU_DATA = {
  id: 'kmu',
  name: 'KMU'
};

export const TENANT_UIT_DATA = {
  id: 'uit',
  name: 'UIT'
};

export const TENANT_KMU_DASHBOARD_CONFIG: DashboardConfig = {
  charts: [
    'pie',
    'line',
    'bar'
  ],
  toolbar: 'advanced'
};

export const TENANT_UIT_DASHBOARD_CONFIG: DashboardConfig = {
  charts: [
    'bar',
    'column'
  ],
  toolbar: 'lite'
};

@Injectable()
export class DashboardService {
  getTenantData(tenantId: string): Observable<any> {
    return tenantId === 'kmu' ? of(TENANT_KMU_DATA) : of(TENANT_UIT_DATA);
  }
  getDashboardConfigForTenant(tenantId: string): Observable<any> {
    return tenantId === 'kmu' ? of(TENANT_KMU_DASHBOARD_CONFIG) : of(TENANT_UIT_DASHBOARD_CONFIG);
  }
  getConfiguredChartItem(config: DashboardConfig, tenantData: any): TenantAwaredItem[] {
    return config && config.charts ? config.charts.map((chart: Charts) => {
      return {
        component: DASHBOARD_TYPE_NAME_MAPPING.get(chart),
        data: this.getChartDataFromTenant(tenantData)
      };
    }) : null;
  }
  private getChartDataFromTenant(tenantData: any): any {
    return tenantData;
  }
  getConfiguredToolbar(config: DashboardConfig): string {
    return config && DASHBOARD_TOOLBAR_TYPE_NAME_MAPPING.get(config.toolbar);
  }
}
