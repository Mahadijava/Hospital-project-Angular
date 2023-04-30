import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent} from '../../components/sidenav/sidenav.component' ;
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    //SidenavComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
