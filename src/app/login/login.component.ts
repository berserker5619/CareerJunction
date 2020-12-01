import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router,private authServ:AuthenticationService) { }
  email:string
  password:string
  user:any
  ngOnInit(): void {
  }
  adminLogin(){
    console.log(this.email+this.password)
    this.user=this.authServ.adminLogin(this.email,this.password)
  }
}
