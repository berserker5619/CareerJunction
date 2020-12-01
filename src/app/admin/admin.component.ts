import { Component, OnInit } from '@angular/core';
import { JobService } from "../services/job.service";
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  jobs:any=[]
  constructor(private jobServ:JobService,private authServ:AuthenticationService) {  }
  isUserLoggedIn=this.authServ.isUserLoggedIn()
  isAdminLoggedIn=this.authServ.isAdminLoggedIn()
  ngOnInit(): void {
    this.jobServ.getAllJobs().subscribe((res)=>{
      this.jobs=res['job']
    })
  }
  jobDelete(id:any){
    this.jobServ.deleteJob(id).subscribe((res)=>{
      alert('Job Deleted Successfully')
      this.ngOnInit()
    })
  }
  adminLogout(){
    this.authServ.adminLogout()
  }
  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
}
