import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionTableComponent } from './admission-table/admission-table.component';
import { BillingPatientFormComponent } from './billing-patient-form/billing-patient-form.component';

const routes: Routes = [
  {path:'', component: AdmissionFormComponent},
  {path: 'admissionlist', component: AdmissionTableComponent},
  {path: 'billingpatient/:id', component: BillingPatientFormComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
