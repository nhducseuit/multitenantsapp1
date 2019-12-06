import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { DebugElement, Injector } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardService } from 'src/app/dashboard/dashboard.service';
import { AppModule } from 'src/app/app.module';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { TenantConfigService } from 'src/app/tenant-config.service';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { APP_BASE_HREF } from '@angular/common';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let debugElement: DebugElement;
  let dashboardService: DashboardService;
  let tenantConfigService: TenantConfigService;
  let injector: Injector;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule,
        DashboardModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;

    injector = getTestBed();

    dashboardService = injector.get(DashboardService);
    tenantConfigService = injector.get(TenantConfigService);
  });

  it('DashboardComponent should be initiated', () => {
    expect(component).toBeDefined();
  });

  describe('Dynamic dashboard config loading', () => {
    it('Should render correct components defined in dashboard config', () => {
      const tenantConfig =  {
        id: 'uit',
        name: 'UIT'
      };
      const uitDashboardConfig = {
        charts: [
          'bar',
          'column'
        ],
        toolbar: 'lite'
      };
      spyOn(tenantConfigService, 'loadTenantConfig').and.returnValue(tenantConfig);
      spyOn(dashboardService, 'getDashboardConfigForTenant').and.returnValue(of(uitDashboardConfig));
      spyOn(dashboardService, 'getConfiguredChartItem').and.callThrough();
      component.ngOnInit();
      fixture.detectChanges();

      const charts = debugElement.queryAll(By.css('.chart'));

      const barChart = charts[0]; // Initiating order of dynamic componet is correct
      expect(barChart).toBeDefined();
      expect(barChart.componentInstance.config.name).toBe('UIT');

      const columnChart = charts[1]; // Initiating order of dynamic componet is correct
      expect(columnChart).toBeDefined();
      expect(columnChart.componentInstance.config.name).toBe('UIT');

    });

    it('Should render correct per tenant configured module via dynamic import', () => {
      const tenantConfig =  {
        id: 'uit',
        name: 'UIT'
      };
      const uitDashboardConfig = {
        charts: [
          'bar',
          'column'
        ],
        toolbar: 'lite'
      };
      spyOn(tenantConfigService, 'loadTenantConfig').and.returnValue(tenantConfig);
      spyOn(dashboardService, 'getDashboardConfigForTenant').and.returnValue(of(uitDashboardConfig));
      spyOn(dashboardService, 'getConfiguredChartItem').and.callThrough();
      component.ngOnInit();
      fixture.detectChanges();

      const toolbar = debugElement.query(By.css('app-lite-toolbar'));
      expect(toolbar).toBeDefined();
    });

  });


});
