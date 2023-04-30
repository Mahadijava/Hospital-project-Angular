import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from 'src/app/components/sidenav/sidenav.component';

const routes: Routes = [
  {path:'', component: AdminDashboardComponent}
];

@NgModule({
  imports: [ 
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
