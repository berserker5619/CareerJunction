import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(jobs:any[], searchTerm:string): any {
    if(!searchTerm){
      return jobs
    }else{
      if(searchTerm!=''){
        jobs=jobs.filter(job=>job.searchKeyword.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1)
      }
  }
  return jobs
  }
}
