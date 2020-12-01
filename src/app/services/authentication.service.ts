import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user:string
  constructor(private route:Router,private http:HttpClient) { 
  }
  
  login(email:string,password:string){
    if(!this.isAdminLoggedIn()){
      this.findUser(email).subscribe((res)=>{
        if(res['status']=='failure'){
          alert(res['message'])
          return false
        }
        else if(res['status']=='success'){
          if(res['user'].password==password){
            localStorage.setItem('user',res['user']._id)
            alert('Welcome '+res['user'].firstname+' '+res['user'].lastname)
            return res['user'].firstname
          } 
      }
    })
  }
  }
  adminLogin(email:string,password:string){
    if(!this.isUserLoggedIn()){
    if(email=='nexus@nizam.com' && password=='admin'){
      localStorage.setItem('admin','berserker')
      this.route.navigateByUrl('/admin')
      alert('Welcome Berserker-Admin')
      return true
    }
  }
  }
  isAdminLoggedIn(){
    const user=localStorage.getItem('admin')
    if(user){
      return true
    }
    else{
      return false
    }
  }
  isUserLoggedIn(){
    const user=localStorage.getItem('user')
    if(user){
      return true
    }
    else{
      return false
    }
  }
  adminLogout(){
    localStorage.removeItem('admin')
    this.route.navigateByUrl('')
    location.reload()
  }
  userLogOut(){
    localStorage.removeItem('user')
    this.route.navigateByUrl('')
    location.reload()
  }
  public findUser(email:string):Observable<any[]>{
    return this.http.get<any[]>(`http://localhost:8083/api/login/${email}`)
  }
}
