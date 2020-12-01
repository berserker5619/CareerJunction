import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  public postUser(User:any):Observable<any[]>{
    return this.http.post<any[]>(`http://localhost:8083/api/user`,User)
  }
  public getAllUsers():Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/api/user`)
  }
  public getUserById(userId:any):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/api/user/${userId}`)
  }
  public updateUser(User:any):Observable<any[]>{
    return this.http.put<any[]>(`http://localhost:8083/api/user`,User)
  }
  public deleteUser(userId:any):Observable<any[]>{
    return this.http.delete<any[]>(`http://localhost:8083/api/user/${userId}`)
  }
  public fileupload(value: any):Observable<any[]>{
    return this.http.post<any[]> ('http://localhost:8083/api/resumeupload', value);
  }
}
