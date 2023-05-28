import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iAdmissionBean } from './admission';
import { Observable } from 'rxjs';
import { patientBill } from './billing-patient-form/bill';

@Injectable({
  providedIn: 'root'
})
export class AdmissionServiceService {

  private api = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getAdmissionList():Observable<iAdmissionBean[]>{
    return this.http.get<iAdmissionBean[]>(`${this.api}/patientadmission/post`);
  }

  public saveAdmission(admission:iAdmissionBean): Observable<iAdmissionBean>{
    return this.http.post<iAdmissionBean>(`${this.api}/patientadmission/post`, admission);
  }

  public updateAdmission(admission: iAdmissionBean): Observable<iAdmissionBean>{
      return this.http.put<iAdmissionBean>(`${this.api}/patientadmission/post/${admission.id}`, admission);
  }

  public getById(id: number): Observable<iAdmissionBean>{
    
    return this.http.get<iAdmissionBean>(`${this.api}/patientadmission/post/${id}`);
  }
  public deleteAdmission(id:number){
    return this.http.delete(`${this.api}/patientadmission/post/${id}`);
  }

  public getDoctorByDept(dep: string){
    return this.http.get<iAdmissionBean[]>('http://localhost:8080/doctor-signup/specialized-doctorslist?dep='+dep)
  }

  public getDepartmentList():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}/specialization/departmentlist`);
  }

  public selectBed(dep: string){
    return this.http.get<iAdmissionBean[]>('http://localhost:8080/doctor-signup/specialized-doctorslist?dep='+dep)
  }

  public getCabintype(){
    return this.http.get<iAdmissionBean[]>('http://localhost:8080/cabintype')
  }

  public getRoomByCabinType(cabin: string){
    return this.http.get<iAdmissionBean[]>('http://localhost:8080/room?cabintype='+cabin)
  }

  // billing service

  public saveBillingInfo(payment:patientBill): Observable<patientBill>{
    return  this.http.post<patientBill>(`${this.api}/billingpatient/post`, payment);
  }
  
}
