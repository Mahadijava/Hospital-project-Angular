import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorsBean } from '../doctorinfo';

@Injectable({
  providedIn: 'root'
})
export class SignupDoctorService {

  private api = "http://localhost:8080/doctor-signup";
  constructor(private http:HttpClient) { }

  public getAllDoctorsList():Observable<DoctorsBean[]>{
    return this.http.get<DoctorsBean[]>(`${this.api}/doctorslist`);
  }

  public saveDoctorsInfo(doctor: DoctorsBean): Observable<DoctorsBean>{
    return this.http.post<DoctorsBean>(`${this.api}/save-doctorinfo`, doctor);
  }

  public updateDoctorsInfo(doctor: DoctorsBean): Observable<DoctorsBean>{
    return this.http.put<DoctorsBean>(`${this.api}/update-doctorinfo/{id}`, doctor);
  }
  
}
