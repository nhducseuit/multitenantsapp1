import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { VcrHostDirective } from '../vcr-host.directive';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(VcrHostDirective, {static: true}) vcrHost: VcrHostDirective;

  constructor(
    private dashboardService: DashboardService,
    private cfr: ComponentFactoryResolver,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // const tenantId = this.route.snapshot.paramMap.get('tenantId');
    const tenantId = 'kmu';
    const tenantData = this.dashboardService.getTenantData(tenantId);
    // this.dashboardService.getDashboardConfigForTenant()
  }

}
