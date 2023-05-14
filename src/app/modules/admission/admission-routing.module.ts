import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { AdmissionTableComponent } from './admission-table/admission-table.component';

const routes: Routes = [
  {path:'', component: AdmissionFormComponent},
  {path: 'admissionlist', component: AdmissionTableComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
