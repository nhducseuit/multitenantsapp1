import { Injectable } from '@angular/core';
import { DashboardConfig, Charts } from './dashboard-config.interface';
import { Observable, of } from 'rxjs';
import { ChartItem } from './chart-item.interface';
import { DASHBOARD_TYPE_NAME_MAPPING } from './dashboard-type-name.mapping';

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
    'line'
  ]
};

export const TENANT_UIT_DASHBOARD_CONFIG: DashboardConfig = {
  charts: [
    'bar'
  ]
};

@Injectable()
export class DashboardService {
  getTenantData(tenantId: string): Observable<any> {
    return tenantId === 'kmu' ? of(TENANT_KMU_DATA) : of(TENANT_UIT_DATA);
  }
  getDashboardConfigForTenant(tenantId: string): Observable<any> {
    return tenantId === 'kmu' ? of(TENANT_KMU_DASHBOARD_CONFIG) : of(TENANT_UIT_DASHBOARD_CONFIG);
  }
  mapDashboardConfigToItem(config: DashboardConfig, tenantData: any): ChartItem[] {
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
}
