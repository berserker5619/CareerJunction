import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authServ:AuthenticationService,private route:Router){ }
  canActivate(){
    if(this.authServ.isAdminLoggedIn()){
      return true
    }
    else{
      this.route.navigateByUrl('')
      return false
    }
  }

}
