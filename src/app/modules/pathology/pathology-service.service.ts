import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathologyBean } from './pathology';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PathologyServiceService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getPathologyPatientList():Observable<PathologyBean[]>{
    return this.http.get<PathologyBean[]>(`${this.api}/pathologypatient/post`);
  }

  public getAllLabTestAmount(testName: any):Observable<any>{
    return this.http.get<any>(this.api + "/totalAmount/" + testName);
  }

  public addPathology(pathology:PathologyBean): Observable<PathologyBean>{
    return this.http.post<PathologyBean>(`${this.api}/pathologypatient/post`, pathology);
  }

  public updatePathology(pathology: PathologyBean): Observable<PathologyBean>{
      return this.http.put<PathologyBean>(`${this.api}/pathology/post/${pathology.id}`, pathology);
  }

  public editById(id: number): Observable<PathologyBean>{
    
    return this.http.get<PathologyBean>(`${this.api}/pathology/post/${id}`);
  }
  public deletePathology(id:number){
    return this.http.delete(`${this.api}/pathology/post/${id}`);
  }

  public getAllLabTestNames():Observable<any[]>{
    return this.http.get<any[]>(`${this.api}/pathologylist`);
  }


}
