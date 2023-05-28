import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupDoctorComponent } from './components/signup-doctor/signup-doctor.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupEmployeeComponent } from './components/signup-employee/signup-employee.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePrescriptionComponent } from './modules/prescription/create-prescription/create-prescription.component';
import { EditPrescriptionComponent } from './modules/prescription/edit-prescription/edit-prescription.component';
import { ShowPrescriptionComponent } from './modules/prescription/show-prescription/show-prescription.component';
import { AdmissionFormComponent } from './modules/admission/admission-form/admission-form.component';
import { DdMmYYYYDatePipe } from './dd-mm-yyyy-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupDoctorComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    SignupEmployeeComponent,
    SidenavComponent,
    CreatePrescriptionComponent,
    EditPrescriptionComponent,
    ShowPrescriptionComponent,
    AdmissionFormComponent,
    DdMmYYYYDatePipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
