import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathologyRoutingModule } from './pathology-routing.module';
import { CreatePathologyComponent } from './create-pathology/create-pathology.component';
import { EditPathologyComponent } from './edit-pathology/edit-pathology.component';
import { FormControlName, ReactiveFormsModule } from '@angular/forms';
import { ShowPathologyTableComponent } from './show-pathology-table/show-pathology-table.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';



@NgModule({
  declarations: [
    CreatePathologyComponent,
    EditPathologyComponent,
    ShowPathologyTableComponent
  ],
  imports: [
    CommonModule,
    PathologyRoutingModule, 
    ReactiveFormsModule, 
    NgMultiSelectDropDownModule.forRoot()
  ]
})
export class PathologyModule { }
