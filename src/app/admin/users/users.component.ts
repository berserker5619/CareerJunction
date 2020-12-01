import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userserv:UserService) { }
  users:any=[]
  ngOnInit(): void {
    this.userserv.getAllUsers().subscribe((res)=>{
      this.users=res['user']
    })
  }
  deleteUser(userId){
    this.userserv.deleteUser(userId).subscribe((res)=>{
      alert('User Account Deleted')
      this.ngOnInit()
    })
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
