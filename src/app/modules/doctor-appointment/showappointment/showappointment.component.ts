import { Component, OnInit } from '@angular/core';
import { AppointmentBean } from '../appointment';
import { AppointmentServiceService } from '../appointment-service.service';

@Component({
  selector: 'app-showappointment',
  templateUrl: './showappointment.component.html',
  styleUrls: ['./showappointment.component.css']
})
export class ShowappointmentComponent implements OnInit {
  listofAppointment: AppointmentBean[] = [];

  constructor(private appointmentservice: AppointmentServiceService){}
  
  ngOnInit(): void {
    this.showappointList();
  }
  showappointList(){
    this.appointmentservice.getAppointmentList().subscribe((data:AppointmentBean[])=> {this.listofAppointment = data;} )
  }

  deletelist(id:number){
    this.appointmentservice.deleteAppointment(id).subscribe(del=>{})
    this.ngOnInit()
  }

  status = "Pending";
  toggle = true;
//button click function
pendingOrDoneStatus(id: number)
      {
        this.toggle = !this.toggle;
        this.status = this.toggle ? "Pending" : "Done";
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

