import { Component, OnInit } from '@angular/core';
import { PathologyBean } from '../pathology';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PathologyServiceService } from '../pathology-service.service';
import { Route, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-pathology',
  templateUrl: './create-pathology.component.html',
  styleUrls: ['./create-pathology.component.css']
})
export class CreatePathologyComponent implements OnInit {

  pathologyPatientList : any[] = [];
  pathologyForm !: FormGroup;
  selectedItems=[];
  dropdownCheckBoxList : any = [];
  dropdownSettings:IDropdownSettings={};

  constructor(private pathologyService: PathologyServiceService, private router: Router, private fb: FormBuilder){}
  
  submit(){
    console.log(this.pathologyForm.value);
    this.pathologyService.addPathology(this.pathologyForm.value).subscribe(
      (res:any)=> {this.router.navigate(["pathologytable"]) }
    )
  }

  
  selectCheckBoxLabTest(){

  }
 


  ngOnInit(): void {

    this.dropdownCheckBoxList = [];
    this.dropdownSettings = {
      idField: 'id',
      textField: 'labTestName',
    };

    this.pathologyService.getAllLabTestNames().subscribe({
      next: (res: any) => {this.dropdownCheckBoxList = res;
      console.log(this.dropdownCheckBoxList);
      },
      error: console.log
      
    })


    this.pathologyForm = this.fb.group({

    patientName: new FormControl(''),
    patientPhone:new FormControl(''),
    refferedBy: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl(''),
    
    pathologyLists: [this.selectedItems],
    
    total: new FormControl(''),
    testDate: new FormControl(''),
    resultDate: new FormControl('')

    })
     
  }

}
