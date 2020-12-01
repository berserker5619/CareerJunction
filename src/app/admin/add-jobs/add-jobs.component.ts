import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { JobService } from "../../services/job.service";
@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {

  constructor(private route:Router,private jobServ:JobService) { }
  job:any={}
  ngOnInit(): void {
    this.job={
      jobId:'',
      jobTitle:'',
      jobPostedDate:'',
      role:'',
      responsibility:'',
      companyName:'',
      experienceRequired:0,
      salaryPackage:0,
      positionsAvailable:0,
      location:'',
      skillsRequired:'',
      degree:'',
      companyInformation:'',
      employmentType:'',
      industryType:'',
      searchKeyword:'',
      jobDescription:''
    }
  }
  addJob(){
    if(this.job.jobId==''){
      alert('Job ID not provided')
      return
    }else if(this.job.jobTitle==''){
      alert('Job Title not provided')
      return
    }else if(this.job.jobPostedDate==''){
      alert('Job posted Date not provided')
      return
    }else if(this.job.role==''){
      alert('Job role not provided')
      return
    }else if(this.job.responsibility==''){
      alert('Job responsibility not provided')
      return
    }else if(this.job.companyName==''){
      alert('companyName not provided')
      return
    }else if(this.job.salaryPackage==0){
      alert('salaryPackage not provided')
      return
    }else if(this.job.positionsAvailable==0){
      alert('positionsAvailable not provided')
      return
    }else if(this.job.location==''){
      alert('Job location not provided')
      return
    }else if(this.job.skillsRequired==''){
      alert('skillsRequired not provided')
      return
    }else if(this.job.degree==''){
      alert('degree not provided')
      return
    }else if(this.job.companyInformation==''){
      alert('companyInformation not provided')
      return
    }else if(this.job.employmentType==''){
      alert('employmentType not provided')
      return
    }else if(this.job.industryType==''){
      alert('industryType not provided')
      return
    }else if(this.job.searchKeyword==''){
      alert('searchKeyword not provided')
      return
    }else if(this.job.jobDescription==''){
      alert('jobDescription not provided')
      return
    }else{
    console.log(this.job)
    this.jobServ.postJob(this.job).subscribe((res)=>{
      alert('Job Added Successfully')
      this.route.navigateByUrl('/admin')
    })}
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
