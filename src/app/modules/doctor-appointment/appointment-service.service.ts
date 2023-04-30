import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppointmentBean } from './appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  private api = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getAppointmentList():Observable<AppointmentBean[]>{
    return this.http.get<AppointmentBean[]>(`${this.api}/appointment/post`);
  }

  public addAppointment(appointment:AppointmentBean): Observable<AppointmentBean>{
    return this.http.post<AppointmentBean>(`${this.api}/appointment/post`, appointment);
  }

  public updateAppointment(appointment: AppointmentBean): Observable<AppointmentBean>{
      return this.http.put<AppointmentBean>(`${this.api}/appointment/post/${appointment.id}`, appointment);
  }

  public editById(id: number): Observable<AppointmentBean>{
    
    return this.http.get<AppointmentBean>(`${this.api}/appointment/post/${id}`);
  }
  public deleteAppointment(id:number){
    return this.http.delete(`${this.api}/appointment/post/${id}`);
  }

  public getDoctorByDept(dep: string){
    return this.http.get<AppointmentBean[]>('http://localhost:8080/doctor-signup/specialized-doctorslist?dep='+dep)
  }

  public getDepartmentList():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}/specialization/departmentlist`);
  }
  //

}
