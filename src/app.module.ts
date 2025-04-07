import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/modules/app-routing.module';
import { AppComponent } from './app/app.component';
import { DepartmentsComponent } from './app/components/departments/departments.component';
import { TimesheetComponent } from './app/components/timesheet/timesheet.component';
import { AnalyticsComponent } from './app/components/analytics/analytics.component';
import { TopNavbarComponent } from './app/components/top-navbar/top-navbar.component';
import { AnalyticsTableComponent } from './app/components/analytics-table/analytics-table.component';
import { MaterialModule } from './app/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    TimesheetComponent,
    AnalyticsComponent,
    TopNavbarComponent,
    AnalyticsTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
