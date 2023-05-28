import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppointmentBean } from '../appointment';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentServiceService } from '../appointment-service.service';
import { DoctorsBean } from 'src/app/components/doctorinfo';

@Component({
  selector: 'app-edit-appointment-form',
  templateUrl: './edit-appointment-form.component.html',
  styleUrls: ['./edit-appointment-form.component.css']
})
export class EditAppointmentFormComponent implements OnInit {

editForm !: FormGroup;
edObject !: AppointmentBean;

doctorlist: DoctorsBean[]=[];
specializationList: any[] = [];


// cardiologyList : string[] = ['Mahadi', 'Tamal', 'Nazim'];
//   neurologyList : string[] = ['Asif', 'Ashraf', 'Selim'];
//   eurologyList : string[] = ['Taher', 'Russel', 'Abdul Kadir'];
//   dermatologyList: string[] = ['Meetu', 'Shajnin', 'Riaz'];

  

  ctegory: string = '';
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private appointservice:AppointmentServiceService
  ) {}

  id !: number;

 
  ngOnInit(): void {

    this.editForm = new FormGroup( {
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

  this.id = this.route.snapshot.params['id'];
  this.editAppointment(this.id);

  this.appointservice.getDepartmentList().subscribe({
    next: (res: any) => { this.specializationList= res;}, 
    error: console.log
  });
  }


   editAppointment(id: number) {
    this.appointservice.editById(id).subscribe((data) => {
     
      this.edObject = data;
      console.log(data)
      console.log(this.edObject.doctorName);
      
      this.editForm = new FormGroup( {
        patientName: new FormControl(data.patientName),
        patientPhone: new FormControl(data.patientPhone),
        patientAddress: new FormControl(data.patientAddress),
        age: new FormControl(data.age),
         gender: new FormControl(data.gender),
        department: new FormControl(data.department), 
        doctorName: new FormControl(this.edObject.doctorName),
        appointmentDate: new FormControl(data.appointmentDate),
        recommendation: new FormControl(data.recommendation), })
    });
  }

  updateAppointment(){
    this.editForm.value.id = this.id;
    this.appointservice.updateAppointment( this.editForm.value).subscribe(  (res: AppointmentBean) => { this.router.navigate ( ["appointmentlist"] ) }, )
  }

    setDoctor() {
      this.appointservice.getDoctorByDept(this.editForm.value.department).subscribe((res: any) => {
        this.doctorlist = res
      },);
  
      // this.appointForm.value.department = only take department
      // this.doctorlist = res হলো এই ডেটাগুলো doctorlist এর মধ্যে push korlam.
    }

}
