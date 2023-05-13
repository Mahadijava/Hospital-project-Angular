import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iAdmissionBean } from './admission';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionServiceService {

  private api = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getAdmissionList():Observable<iAdmissionBean[]>{
    return this.http.get<iAdmissionBean[]>(`${this.api}/appointment/post`);
  }

  public saveAdmission(appointment:iAdmissionBean): Observable<iAdmissionBean>{
    return this.http.post<iAdmissionBean>(`${this.api}/appointment/post`, appointment);
  }

  public updateAdmission(appointment: iAdmissionBean): Observable<iAdmissionBean>{
      return this.http.put<iAdmissionBean>(`${this.api}/appointment/post/${appointment.id}`, appointment);
  }

  public editById(id: number): Observable<iAdmissionBean>{
    
    return this.http.get<iAdmissionBean>(`${this.api}/appointment/post/${id}`);
  }
  public deleteAdmission(id:number){
    return this.http.delete(`${this.api}/appointment/post/${id}`);
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
}
