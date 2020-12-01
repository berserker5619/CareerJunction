import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplySaveJobsService {
  appliedJobs:any=[]
  savedJobs:any=[]
  constructor() { }
  addToSavedJobs(job:any){
    this.savedJobs.push(job)
    return true
  }
  addToAppliedJobs(job:any){
    this.appliedJobs.push(job)
    return true
  }
  getAppliedJobs(){
    return this.appliedJobs
  }
  getSavedJobs(){
    return this.savedJobs
  }
}
