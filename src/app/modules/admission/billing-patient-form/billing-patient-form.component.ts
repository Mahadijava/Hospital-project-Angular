import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AdmissionServiceService } from '../admission-service.service';

@Component({
  selector: 'app-billing-patient-form',
  templateUrl: './billing-patient-form.component.html',
  styleUrls: ['./billing-patient-form.component.css']
})
export class BillingPatientFormComponent implements OnInit {

  billForm !: FormGroup;


  constructor(private admissionService: AdmissionServiceService, private router: Router, ) { }

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
      admissionDate: new FormControl(),
      releaseDate: new FormControl(),
      stayingDays: new FormControl(),
      total:new FormControl(),
      discount: new FormControl(),
      doctorVisit: new FormControl(),
      visitDate: new FormControl(),
      doctorCharge:new FormControl(),
      case: new FormControl(),
      medicine:new FormControl(),
      medicinePrice: new FormControl(),
      surgeryDetails: new FormControl(),
      surgeryCost: new FormControl(),
    });

   
    
  }


   

  

}
