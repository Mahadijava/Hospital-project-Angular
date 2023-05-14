import { Component, OnInit } from '@angular/core';
import { iAdmissionBean } from '../admission';
import { AdmissionServiceService } from '../admission-service.service';

@Component({
  selector: 'app-admission-table',
  templateUrl: './admission-table.component.html',
  styleUrls: ['./admission-table.component.css']
})
export class AdmissionTableComponent implements OnInit {

  admissiontable:iAdmissionBean[] = [];

  constructor(private admissionservice:AdmissionServiceService){}

  ngOnInit(): void {
    this.showAdmissionTable();
  }

  showAdmissionTable(){
    this.admissionservice.getAdmissionList().subscribe((data:iAdmissionBean[])=> {this.admissiontable = data;} )
  }

  status = "Admitted";
  toggle = true;
//button click function
admittedOrReleasedStatus(id: number)
      {
        this.toggle = !this.toggle;
        this.status = this.toggle ? "Admitted" : "Released";
      }

  recommendation = "No Recommendation";
  toggle1 = true;
//button click function
needAdmissionOrNot(id: number)
      {
        this.toggle1 = !this.toggle1;
        this.recommendation = this.toggle1 ? "No Recommendation" : "Needs Admission";
      }

}
