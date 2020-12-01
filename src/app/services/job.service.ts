import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  public postJob(Job:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8083/api/job`,Job)
  }
  public getAllJobs():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/api/job`)
  }
  public getJobById(jobId:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/api/job/${jobId}`)
  }
  public updateJob(Job:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8083/api/job`,Job)
  }
  public deleteJob(jobId:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8083/api/job/${jobId}`)
  }
}
