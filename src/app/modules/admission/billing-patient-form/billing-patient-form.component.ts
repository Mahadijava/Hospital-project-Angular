import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdmissionServiceService } from '../admission-service.service';
import { iAdmissionBean } from '../admission';
import { DatePipe } from '@angular/common';
import { patientBill } from './bill';


@Component({
  selector: 'app-billing-patient-form',
  templateUrl: './billing-patient-form.component.html',
  styleUrls: ['./billing-patient-form.component.css']
})
export class BillingPatientFormComponent implements OnInit {

  date = new Date();
  billForm !: FormGroup;

  editAdmission!: iAdmissionBean;
  admissionId!: any;

  appointmentTime!: any;

  constructor(private admissionService: AdmissionServiceService, private router: Router, private activateroute: ActivatedRoute) { }


  ngOnInit(): void {
    console.log(new Date().getDate());

    this.billForm = new FormGroup({
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
      stayingDays: new FormControl(0),
      total: new FormControl(0),
      billDiscount: new FormControl(),
      doctorVisit: new FormControl(),
      visitDate: new FormControl(),
      doctorCharge: new FormControl(),
      case: new FormControl(),
      medicine: new FormControl(),
      medicinePrice: new FormControl(),
      surgeryDetails: new FormControl(),
      surgeryCost: new FormControl(),
    });

    this.admissionId = this.activateroute.snapshot.params['id'];
    this.getAdmissionInfoById(this.admissionId);
  }




  getAdmissionInfoById(admissionId: any) {

    this.admissionService.getById(admissionId).subscribe((data) => {
      this.editAdmission = data;
      console.log(data);

      this.billForm = new FormGroup({
        id: new FormControl(data.id),
        patientName: new FormControl(data.patientName),
        age: new FormControl(data.age),
        patientPhone: new FormControl(data.patientPhone),
        patientAddress: new FormControl(data.patientAddress),
        gender: new FormControl(data.gender),
        doctorName: new FormControl(data.doctorName),
        department: new FormControl(data.department),
        cabinType: new FormControl(data.cabinType),
        roomNumber: new FormControl(data.roomNumber),
        price: new FormControl(data.price),
        description: new FormControl(data.description),
        createdAt: new FormControl(data.createdAt),
        releaseDate: new FormControl(data.releaseDate)
      })
    })

  }

  // pId :number = this.billForm.value.id;



  // hours: any;
  // getDiffDays() {
  //   var startDate = new Date(this.billForm.value.createdAt);
  //   var endDate = new Date(this.billForm.value.releaseDate);

  //   var Time = endDate.getTime() - startDate.getTime();
  //   console.log('hour---',Time / (1000 * 3600));
  //   this.hours = this.hours = Math.round(Time / (1000 * 3600));
  // }

  patientStayingDays !: number;

  getDiffDays() {

    var startDate = new Date(this.billForm.value.createdAt);
    var endDate = new Date(this.billForm.value.releaseDate);

    var Time = endDate.getTime() - startDate.getTime();
    console.log('hour---',Time / (1000 * 3600));
    console.log('days -- ', Time/ (24 * 60 * 60 * 1000));

    this.patientStayingDays = Math.round(Math.abs(Time / (24 * 60 * 60 * 1000)));


    this.cabinBill = this.patientStayingDays * this.billForm.value.price;
    console.log('cabin bill --- ', this.cabinBill);
    this.totalBill = this.cabinBill;

  }
  // additionalCharge :number = 0;
  // discount : number= 0;
  // totalBill : number = 0;
  // cabinBill : number = 0;

  additionalCharge: number = 0;
  discount: number = 0;
  totalBill: number = 0;
  cabinBill: number = 0;

  addAditional() {
    this.totalBill += this.additionalCharge;
  }

  addDiscount() {
    this.totalBill -= this.discount;
  }


  submitBillingInfo() {
    this.getDiffDays();
    this.billForm.value.stayingDays = this.patientStayingDays;
    this.billForm.value.total = this.totalBill;


    console.log('---------------------', this.billForm.value);

    this.admissionService.saveBillingInfo(this.billForm.value).subscribe((res: patientBill) => {


      this.editAdmission.releaseDate = this.billForm.value.releaseDate;
      this.editAdmission.admissionStatus = "Released";

      this.admissionService.updateAdmission(this.editAdmission).subscribe({

        next: res => {
          console.log('this.totalBill ---', this.totalBill);
          // this.router.navigate(["admissionform/admissionlist"]);

        },
        error: console.log

      });


    })


  }



}
