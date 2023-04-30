import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorAppointmentRoutingModule } from './doctor-appointment-routing.module';
import { CreateAppointmentFormComponent } from './create-appointment-form/create-appointment-form.component';
import { EditAppointmentFormComponent } from './edit-appointment-form/edit-appointment-form.component';
import { ShowappointmentComponent } from './showappointment/showappointment.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CreateAppointmentFormComponent,
    EditAppointmentFormComponent,
    ShowappointmentComponent
  ],
  imports: [
    CommonModule,
    DoctorAppointmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
   
  ]
})
export class DoctorAppointmentModule { }
