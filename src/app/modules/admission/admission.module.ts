import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionTableComponent } from './admission-table/admission-table.component';
import { BillingPatientFormComponent } from './billing-patient-form/billing-patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  
    AdmissionTableComponent,
            BillingPatientFormComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdmissionModule { }
