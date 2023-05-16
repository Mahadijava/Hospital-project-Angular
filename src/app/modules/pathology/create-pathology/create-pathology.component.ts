import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class CreatePathologyComponent implements OnInit, OnChanges {

  pathologyPatientList : any[] = [];
  pathologyForm !: FormGroup;
  selectedItems=[];
  dropdownCheckBoxList : any = [];
  dropdownSettings:IDropdownSettings={};

  constructor(private pathologyService: PathologyServiceService, private router: Router, private fb: FormBuilder){}

total1: number = 0;
n:any;

  // onItemSelect(event: any){
  // console.log(event.labTestName);

  // this.pathologyService.getAllLabTestAmount(event.labTestName).subscribe({
  //  next(value) {
  //   this.total1 = value;
  //  },
  //  error(err) {
  //    console.log(err);
     
  //  },
  // })
  
  // }


  onItemSelect(event: any){
    console.log('hjjjjjjjjjjjjjjj');
    
      this.pathologyService.getAllLabTestAmount(event.labTestName).subscribe((data)=> {
        // this.total1 += data;

        // console.log(this.total1);
        
      } )
    }

  selectedOption!: string;

  runMethod(value: string): void {
    console.log(this.selectedOption);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log(changes);
   
  }
  
  submit(){
    console.log(this.pathologyForm.value);
    this.pathologyService.addPathology(this.pathologyForm.value).subscribe(
      (res:any)=> {this.router.navigate(["pathologytable"]) }
    )
  }

  
  selectCheckBoxLabTest(){}
 
  printData(){
    console.log("amount");
//     for(let i of this.selectedItems){
console.log(this.pathologyForm.value.pathologyLists);



//     }

// for (let i = 0; i < this.pathologyForm.value.pathologyLists.length; i++) {
//   console.log(this.pathologyForm.value.pathologyLists[i]);
//   }
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
