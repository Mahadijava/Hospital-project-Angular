import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupDoctorComponent } from './components/signup-doctor/signup-doctor.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupEmployeeComponent } from './components/signup-employee/signup-employee.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path:'admin', loadChildren: () => import('./modules/admin/admin.module').then((m)=> m.AdminModule ), },
  {path:'user', loadChildren: () => import('./modules/admission/admission.module').then((m)=> m.AdmissionModule ), },
  {path:'appointmentlist', loadChildren: () => import('./modules/doctor-appointment/doctor-appointment.module').then((m)=> m.DoctorAppointmentModule ), },
  {path:'pathologytable', loadChildren: () => import('./modules/pathology/pathology.module').then((m)=> m.PathologyModule ), },
  {path:'prescriptionform', loadChildren:()=> import('./modules/prescription/prescription.module').then((m)=>m.PrescriptionModule),},
  {path:'admissionform', loadChildren:()=> import('./modules/admission/admission.module').then((m)=>m.AdmissionModule),},
  

  {path: 'login', component: LoginComponent, data: { showSidenav: false } },
  {path: 'doctorsignup', component: SignupDoctorComponent},
  {path: 'employeesignup', component: SignupEmployeeComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  
  {path: '**', component: NotFoundComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
