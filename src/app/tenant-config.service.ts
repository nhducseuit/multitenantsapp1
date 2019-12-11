import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenantConfigService {
  private readonly TENANT_CONF_KEY = 'tenant';

  setTenantConfig(config: any) {
    localStorage.setItem(this.TENANT_CONF_KEY, JSON.stringify(config));
  }

  loadTenantConfig() {
    return JSON.parse(localStorage.getItem(this.TENANT_CONF_KEY));
  }
}
