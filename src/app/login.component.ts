import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TenantConfigService } from './tenant-config.service';

@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
  template: `
  <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h4>Click buttons below to login to different tenants</h4>
    <button mat-raised-button color="primary" (click)="loginToKMU()" style="margin-bottom: 32px;">Login to KMU to see Dashboard</button>
    <button mat-raised-button color="primary" (click)="loginToUIT()">Login to UIT to see Dashboard</button>
    <button mat-raised-button color="primary" (click)="loginToKMUForm()" style="margin: 32px 0;">Login to KMU to see registration form</button>
    <button mat-raised-button color="primary" (click)="loginToUITForm()">Login to UIT to see registration form</button>
  </div>
  `
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private tenantConfigService: TenantConfigService
  ) { }

  ngOnInit() {
  }

  loginToKMU() {
    this.tenantConfigService.setTenantConfig({
      id: 'kmu',
      name: 'KMU'
    });
    this.router.navigate(['dashboard']);
  }

  loginToUIT() {
    this.tenantConfigService.setTenantConfig({
      id: 'uit',
      name: 'UIT'
    });
    this.router.navigate(['dashboard']);
  }

  loginToKMUForm() {
    this.tenantConfigService.setTenantConfig({
      id: 'kmu',
      name: 'KMU'
    });
    this.router.navigate(['registration']);
  }

  loginToUITForm() {
    this.tenantConfigService.setTenantConfig({
      id: 'uit',
      name: 'UIT'
    });
    this.router.navigate(['registration']);
  }

}
