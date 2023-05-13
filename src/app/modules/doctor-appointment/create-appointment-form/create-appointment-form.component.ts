import { Component, OnInit } from '@angular/core';
import { AppointmentBean } from '../appointment';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentServiceService } from '../appointment-service.service';
import { Router } from '@angular/router';
import { DoctorsBean } from 'src/app/components/doctorinfo';

@Component({
  selector: 'app-create-appointment-form',
  templateUrl: './create-appointment-form.component.html',
  styleUrls: ['./create-appointment-form.component.css']
})
export class CreateAppointmentFormComponent implements OnInit {

  doctorlist: DoctorsBean[] = [];
  specializationList: any[] = [];
  ctegory: string = '';
  appointList: AppointmentBean[] = [];
  appointForm !: FormGroup;

  constructor(private appointservice: AppointmentServiceService, private router: Router) { }

  ngOnInit(): void {
    this.appointForm = new FormGroup({
      patientName: new FormControl(),
      patientPhone: new FormControl(),
      age: new FormControl(),
      patientAddress: new FormControl(),
      gender: new FormControl(),
      doctorName: new FormControl(),
      department: new FormControl(),
      appointmentDate: new FormControl(),
      status: new FormControl(),
      recommendation: new FormControl(),
    });

    this.appointservice.getDepartmentList().subscribe({
      next: (res: any) => { this.specializationList= res;}, 
      error: console.log
    })

    // next: to catch the error

  }

  submit() {
    this.appointForm.value.status = "Pending";
    this.appointForm.value.recommendation = "No Recommendation";
    console.log(this.appointForm.value);

    //this.appointservice.createAppointment(this.appointForm.value).subscribe((next)=>{this.ngOnInit()})         save database only without routing
    this.appointservice.addAppointment(this.appointForm.value).subscribe(  (res: AppointmentBean) => { this.router.navigate ( ["appointmentlist"] ) },  )



// this.appointservice.addAppointment() = service থেকে method call করলাম। 
// (this.appointForm.value) = এই method এর parameter interface type data receive করে, by value। appointForm এর সব variables should be exact to interface.
// httpclient সব সময় observable type data return করে। এই কারনে subscribe() call করতে হবে। 
// res: AppointmentBean হলো  AppointmentBean/any type data save করবে। 
//=> { this.router.navigate ( ["appointment"] ) }  = save করার পর এই জায়গায় চলে যাবে। 

  }

  selectDoctor() {
    this.appointservice.getDoctorByDept(this.appointForm.value.department).
    subscribe((res: any) => {
      this.doctorlist = res
    },);

    // this.appointForm.value.department = only take department
    // this.doctorlist = res হলো এই ডেটাগুলো doctorlist এর মধ্যে push korlam.
  }


}


