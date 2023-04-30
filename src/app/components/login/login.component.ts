import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private appComponent: AppComponent) {}

  hideSidenav(): void {
    this.appComponent.hideSidenavComponent();
  }

  
}
