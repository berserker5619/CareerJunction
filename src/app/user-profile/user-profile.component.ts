import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplySaveJobsService } from '../services/apply-save-jobs.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user:any=[]
  appliedJobs=[]
  savedJobs=[]
  userId
  constructor(private userServ:UserService,private applySaveJobServ:ApplySaveJobsService,private activeRoute:ActivatedRoute,private router:Router) {
    this.userId=this.activeRoute.snapshot.params.id
   }
  ngOnInit(): void {
    this.userServ.getUserById(this.userId).subscribe((res)=>{
      this.user=res['user']
    })
    this.appliedJobs=this.applySaveJobServ.getAppliedJobs()
    this.savedJobs=this.applySaveJobServ.getSavedJobs()
  }
  deleteAccount(id:any){
    this.userServ.deleteUser(id).subscribe((res)=>{
      localStorage.removeItem('user')
      alert('Account Deleted Successfully')
      this.router.navigateByUrl('')
    })
  }

}
