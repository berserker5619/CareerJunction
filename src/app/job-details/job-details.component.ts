import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { ApplySaveJobsService } from '../services/apply-save-jobs.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  job:any=[]
  jobId:any
  applyBtnFlag=false
  saveBtnFlag=true
  constructor(private jobServ:JobService,private applySaveServ:ApplySaveJobsService,private activeRoute:ActivatedRoute,private router:Router,private authServ:AuthenticationService) {
    this.jobId=activeRoute.snapshot.params.id
   }

  ngOnInit(): void {
    this.jobServ.getJobById(this.jobId).subscribe((res)=>{
      this.job=res['job']
    })
    this.applyBtnFlag=this.saveBtnFlag=this.authServ.isUserLoggedIn()
  }
  apply(){
    if(this.applySaveServ.addToAppliedJobs(this.job)){
      console.log(this.job)
      alert('Job Applied')
    }
  }
  save(){
    if(this.applySaveServ.addToSavedJobs(this.job)){
      alert('Job Saved')
    }
  }
}
