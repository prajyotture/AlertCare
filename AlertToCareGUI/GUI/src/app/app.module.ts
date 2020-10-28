import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientService } from './patient.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewPatientsComponent } from './view-patients/view-patients.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    ViewPatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
