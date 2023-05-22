import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionTableComponent } from './admission-table/admission-table.component';
import { BillingPatientFormComponent } from './billing-patient-form/billing-patient-form.component';



@NgModule({
  declarations: [
    
  
    AdmissionTableComponent,
            BillingPatientFormComponent
  ],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
    
  ]
})
export class AdmissionModule { }
