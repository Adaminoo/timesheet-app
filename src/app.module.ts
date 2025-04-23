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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from './environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { EmployeeService } from './app/services/employee.service';


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
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: EmployeeService,
      useFactory: (afs: AngularFirestore) => new EmployeeService(afs),
      deps: [AngularFirestore],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
