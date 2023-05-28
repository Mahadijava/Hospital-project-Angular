import { Component } from '@angular/core';
import { DoctorsBean } from 'src/app/components/doctorinfo';
import { iAdmissionBean } from '../admission';
import { FormControl, FormGroup } from '@angular/forms';
import { AdmissionServiceService } from '../admission-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent {

  doctorlist: DoctorsBean[] = [];
  specializationList: any[] = [];

  admissionList: iAdmissionBean[] = [];
  admissionForm !: FormGroup;

  constructor(private admissionService: AdmissionServiceService, private router: Router) { }
  cabinTypeList!: any[];
  roomList!: any[];

  ngOnInit(): void {
    this.admissionForm = new FormGroup({
      patientName: new FormControl(),
      patientPhone: new FormControl(),
      age: new FormControl(),
      patientAddress: new FormControl(),
      gender: new FormControl(),
      doctorName: new FormControl(),
      department: new FormControl(),
      cabinType: new FormControl(),
      roomNumber: new FormControl(),
      price: new FormControl(0),
      description: new FormControl(),
      createdAt: new FormControl(),
      releaseDate: new FormControl(),
      status: new FormControl(),
      totalBedBill: new FormControl(),
    });

    this.admissionService.getDepartmentList().subscribe({
      next: (res: any) => { this.specializationList = res; },
      error: console.log
    })

    // next: to catch the error

    this.getCabinList();


  }




  submit() {
    // this.admissionForm.value.status = "Pending";
// this.admissionForm.value.recommendation = "No Recommendation";

console.log(this.admissionForm.value);

    // this.admissionForm.value.roomNumber = this.admissionForm.value.room.roomNumber;

    
    //this.appointservice.createAppointment(this.appointForm.value).subscribe((next)=>{this.ngOnInit()})         save database only without routing
    this.admissionService.saveAdmission(this.admissionForm.value).subscribe((res: iAdmissionBean) => { this.router.navigate(["admissionform/admissionlist"]) },)



    // this.appointservice.addAppointment() = service থেকে method call করলাম। 
    // (this.appointForm.value) = এই method এর parameter interface type data receive করে, by value। appointForm এর সব variables should be exact to interface.
    // httpclient সব সময় observable type data return করে। এই কারনে subscribe() call করতে হবে। 
    // res: AppointmentBean হলো  AppointmentBean/any type data save করবে। 
    //=> { this.router.navigate ( ["appointment"] ) }  = save করার পর এই জায়গায় চলে যাবে। 

  }

  selectDoctor() {
    this.admissionService.getDoctorByDept(this.admissionForm.value.department).subscribe((res: any) => {
      this.doctorlist = res
    },);

    // this.appointForm.value.department = only take department
    // this.doctorlist = res হলো এই ডেটাগুলো doctorlist এর মধ্যে push korlam.
  }

  room: any={"roomNumber":"", "price":0}

  getSelectedRoom() {

    console.log(this.admissionForm.value.roomNumber);

    this.roomList.find((elem) => {
      if(elem.roomNumber===this.admissionForm.value.roomNumber){
        this.room = elem;
      }
    })
    console.log(this.room);
    this.admissionForm.value.price = this.room.price
    console.log(this.admissionForm.value.price);
  }



  getRoomList() {
    console.log(this.admissionForm.value.cabinType);
    this.room = {"roomNumber":"", "price":0};
    this.admissionService.getRoomByCabinType(this.admissionForm.value.cabinType).
      subscribe((res: any) => { this.roomList = res },);
  }


  getCabinList() {
    this.admissionService.getCabintype().subscribe({
      next: (res: any) => {
        this.cabinTypeList = res;
      },
      error: console.log
    })
  }

}