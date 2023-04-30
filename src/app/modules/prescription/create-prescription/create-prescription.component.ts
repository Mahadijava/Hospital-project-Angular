import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit {

  prescriptionForm !: FormGroup;

  constructor(){

 }

  ngOnInit(): void {
    this.prescriptionForm = new FormGroup({
      prescribe: new FormArray([
        
      ])
    })

  }

  

  

}
