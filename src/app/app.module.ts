import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ValidateEqualModule} from 'ng-validate-equal';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientDashboardComponent } from './dashboard/patient-dashboard/patient-dashboard.component';
import { ClinicDashboardComponent } from './dashboard/clinic-dashboard/clinic-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SpecialitiesComponent } from './specialities/specialities.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { ModalComponent } from './specialities/modal/modal.component';
import { TopNavComponent } from './navbar/top-nav/top-nav.component';
import { AsideNavComponent } from './navbar/aside-nav/aside-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    PatientDashboardComponent,
    ClinicDashboardComponent,
    HomeComponent,
    SpecialitiesComponent,
    ModalComponent,
    TopNavComponent,
    AsideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //  for password and confirmPassword:
    ValidateEqualModule!,
    // for localStorage:
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
