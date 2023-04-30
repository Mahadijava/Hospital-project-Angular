import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital-project';
  
  hideSidenav = false;

  // Method to hide the sidenav component
  hideSidenavComponent(): void {
    this.hideSidenav = true;
  }

  // Method to show the sidenav component
  showSidenavComponent(): void {
    this.hideSidenav = false;
  }

}
