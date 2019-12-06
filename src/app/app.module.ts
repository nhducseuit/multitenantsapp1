import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SystemJsNgModuleLoader, NgModuleFactoryLoader } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
