import { Component, OnInit } from '@angular/core';
import { PathologyServiceService } from '../pathology-service.service';
import { PathologyBean } from '../pathology';

@Component({
  selector: 'app-show-pathology-table',
  templateUrl: './show-pathology-table.component.html',
  styleUrls: ['./show-pathology-table.component.css']
})
export class ShowPathologyTableComponent implements OnInit {

  listOfTests: PathologyBean[] = [];

  constructor(private pathologyService: PathologyServiceService){}

  showpathologyTable(){
    this.pathologyService.getPathologyPatientList().subscribe((data)=> {this.listOfTests = data;
    console.log(this.listOfTests);
    } )
  }

  deletelist(id:number){
    this.pathologyService.deletePathology(id).subscribe(del=>{})
    this.ngOnInit()
  }
  ngOnInit(): void {
    this.showpathologyTable();
  }

}
