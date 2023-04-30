import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAppointmentFormComponent } from './create-appointment-form/create-appointment-form.component';
import { EditAppointmentFormComponent } from './edit-appointment-form/edit-appointment-form.component';
import { ShowappointmentComponent } from './showappointment/showappointment.component';

const routes: Routes = [
  {path: '', component: ShowappointmentComponent},
  {path: 'appointmentform', component: CreateAppointmentFormComponent},
  {path: 'edit-appointmenform/:id', component: EditAppointmentFormComponent},
  
  // here the lazy loading path name is done in app routing module. thats why  ShowappointmentComponent path is null.
  //the appointlist path has successfully incorporated all the path mentioned in this routing module. 
  

  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorAppointmentRoutingModule { }
