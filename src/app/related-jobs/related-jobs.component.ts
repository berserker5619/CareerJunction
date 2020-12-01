import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-related-jobs',
  templateUrl: './related-jobs.component.html',
  styleUrls: ['./related-jobs.component.css']
})
export class RelatedJobsComponent implements OnInit {

  jobs:any=[]
  skillSearch
  locationSearch
  companySearch
  constructor(private jobServ:JobService,private actRoute:ActivatedRoute) {
    if(this.actRoute.snapshot.queryParamMap.has('skill') && this.actRoute.snapshot.queryParamMap.has('location')){
      this.skillSearch=this.actRoute.snapshot.queryParamMap.get('skill')
      this.locationSearch=this.actRoute.snapshot.queryParamMap.get('location')
    }
    if(this.actRoute.snapshot.queryParamMap.has('company')){
      this.companySearch=this.actRoute.snapshot.queryParamMap.get('company')
    }
   }
   
  ngOnInit(): void {
    this.jobServ.getAllJobs().subscribe((res)=>{
      this.jobs=res['job']
    })
  }

}
