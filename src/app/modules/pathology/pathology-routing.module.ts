import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPrescriptionComponent } from '../prescription/show-prescription/show-prescription.component';
import { CreatePathologyComponent } from './create-pathology/create-pathology.component';
import { EditPathologyComponent } from './edit-pathology/edit-pathology.component';
import { ShowPathologyTableComponent } from './show-pathology-table/show-pathology-table.component';

const routes: Routes = [
  {path: '', component: ShowPathologyTableComponent},
  {path: 'pathologyform', component: CreatePathologyComponent},
  {path: 'editpathology', component:EditPathologyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PathologyRoutingModule { }
