import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.scss']
})
export class AllJobsComponent implements OnInit {

  jobs:any=[]
  searchTerm:string=''
  
  constructor(private jobServ:JobService) { }

  ngOnInit(): void {
    this.jobServ.getAllJobs().subscribe((res)=>{
      this.jobs=res['job']
    })
  }
  search(){
    this.searchTerm=(<HTMLInputElement>(document.getElementById('searchTerm'))).value
  }
  cancelSearch(){
    this.searchTerm=''
  }

}
