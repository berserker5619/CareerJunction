import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter2'
})
export class JobFilter2Pipe implements PipeTransform {

  transform(jobs:any[], skill:string,location:string,company:string): any {
    if(skill=='' && location=='' && company==''){
      return jobs
    }else{
      if(company!=null){
        jobs=jobs.filter(job=>job.companyName.toLowerCase().indexOf(company.toLowerCase())!==-1)
      }
      else{
      if(skill!=''){
        jobs=jobs.filter(job=>job.skillsRequired.toLowerCase().indexOf(skill.toLowerCase())!==-1)
      }
      if(location!=''){
        jobs=jobs.filter(job=>job.location.toLowerCase().indexOf(location.toLowerCase())!==-1)
      }
    }
      return jobs
    }
  }
}

