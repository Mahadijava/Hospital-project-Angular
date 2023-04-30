import { Component, OnInit } from '@angular/core';
import { DoctorsBean } from '../doctorinfo';
import { FormControl, FormGroup } from '@angular/forms';
import { SignupDoctorService } from './signup-doctor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-doctor',
  templateUrl: './signup-doctor.component.html',
  styleUrls: ['./signup-doctor.component.css']
})
export class SignupDoctorComponent implements OnInit {

  doctorSignUpForm !: FormGroup;

  constructor(private doctorSignupService: SignupDoctorService, private router: Router){}

  ngOnInit(): void {
    this.doctorSignUpForm = new FormGroup({
      doctorName: new FormControl(),
      email: new FormControl(), 
      phone: new FormControl(),
      userName: new FormControl(), 
      department: new FormControl(),
      password: new FormControl(),
    })
    
  }

  submitDoctorsInfo(){
    console.log(this.doctorSignUpForm.value);
    this.doctorSignupService.saveDoctorsInfo(this.doctorSignUpForm.value).subscribe((res:any)=>{this.router.navigate(["login"])})
  }

}
