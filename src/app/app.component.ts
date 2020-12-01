import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  isUserLoggedIn
  userId:string
  user:any={}
  constructor(private authServ:AuthenticationService,private userServ:UserService){
   
  }
  ngOnInit(): void {
    this.isUserLoggedIn=this.authServ.isUserLoggedIn()
    if(this.isUserLoggedIn){
    this.userId=localStorage.getItem('user')
    this.userServ.getUserById(this.userId).subscribe((res)=>{
      this.user={
        _id:res['user']._id,
        firstname:res['user'].firstname,
        lastname:res['user'].lastname
      }
    })
  }
  }
  
  userLogout(){
    this.authServ.userLogOut()
    this.isUserLoggedIn=this.authServ.isUserLoggedIn()
  }
}
