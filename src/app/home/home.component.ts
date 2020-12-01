import { Component, OnInit } from '@angular/core';
import { JobService } from "../services/job.service";
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs:any=[]
  email:string=''
  password:string=''
  skill:string
  location:string
  user:any
  isUserLoggedIn

  constructor(private jobServ:JobService,private route:Router,private authServ:AuthenticationService) { }

  ngOnInit(): void {
    this.jobServ.getAllJobs().subscribe((res)=>{
      this.jobs=res['job']
    })
  this.isUserLoggedIn=this.authServ.isUserLoggedIn()

  }
  login(){
    this.user=this.authServ.login(this.email,this.password)
    if(this.user!=false && this.user!=true){
      location.reload()
    }
  }
  search(){
    if(this.skill!='' && this.location!=''){
      this.route.navigate(['/related-jobs'],{queryParams:{'skill':this.skill,'location':this.location}})
      }
  }
}
