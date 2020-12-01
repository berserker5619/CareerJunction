import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

  job:any=[]
  jobId:any
  constructor(private jobServ:JobService,private activeRoute:ActivatedRoute,private router:Router) {
    this.jobId=activeRoute.snapshot.params.id
   }

  ngOnInit(): void {
    this.jobServ.getJobById(this.jobId).subscribe((res)=>{
      this.job=res['job']
    })
  }
  editJob(){
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
    this.jobServ.updateJob(this.job).subscribe((res)=>{
      alert('Job Updated Successfully')
      this.router.navigateByUrl('/admin')
    })
  }
  }
}
