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

totalAmount: number = 0;



  onItemSelect(event: any){
    console.log(event);
    
      this.pathologyService.getAllLabTestAmount(event.labTestName).subscribe((data)=> {
        this.totalAmount += data;
        console.log(this.totalAmount);
        
      } )
    }

    // Handle item deselection
  onItemDeSelect(item: any) {
    // Handle unselected item

    this.pathologyService.getAllLabTestAmount(item.labTestName).subscribe((data)=> {
      this.totalAmount -= data;
      console.log(this.totalAmount);
      
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

 
  printData(){
console.log("amount");
console.log(this.pathologyForm.value.pathologyLists);
}


  ngOnInit(): void {

    this.dropdownCheckBoxList = [];
    this.dropdownSettings = {
      idField: 'id', // json থেকে model এর যেই ফিল্ড নেইম গুলো এসেছে ঠিক সেগুলো দিতে হবে।  
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
