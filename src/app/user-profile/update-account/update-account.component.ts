import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  userId
  user:any=[]
  filesToUpload: Array<File> =[];
  resmuUploadFlag=true
  constructor(private userServ:UserService,private activeRoute:ActivatedRoute,private router:Router) {
    this.userId=this.activeRoute.snapshot.params.id
   }

  ngOnInit(): void {
    this.userServ.getUserById(this.userId).subscribe((res)=>{
      this.user=res['user']
    })

  }
  submit(flag){
    if(flag==1||flag==2||flag==3){
      if(this.validatePersonalForm()!=false && flag==1){
          this.update()
      }
    }
    if(flag==2){
      if(this.validateEmploymentForm()!=false){
        this.update()
      }
    }
    if(flag==3){
      if(this.validateEducationForm()!=false){
        if(this.user.currentEmployer!=''){
          if(this.validateEmploymentForm()){
          this.update()
          }
        }else{
          this.update()
        }
      }
    }
  }
  update(){
    this.userServ.updateUser(this.user).subscribe((res)=>{
      alert('Updated Successfully')
      this.router.navigate(['user-profile',this.user._id])
    })
  }
  validatePersonalForm(){
    if(this.user.firstname==''){
      alert('Enter Firstname in Personal Deatils Form')
      return false
    }else if(this.user.lastname==''){
      alert('Enter Lastname in Personal Deatils Form')
      return false
    }else if(this.user.email==''){
      alert('Enter Email in Personal Deatils Form')
      return false
    }else if(this.user.contactNumber==''){
      alert('Enter Contact Number in Personal Deatils Form')
      return false
    }else if(this.user.password==''||this.user.password.length<8){
      alert('Enter Password in Personal Deatils Form')
      return false
    }else if(this.user.address==''){
      alert('Enter Address in Personal Deatils Form')
      return false
    }else if(this.user.skills==''){
      alert('Enter Skills in Personal Deatils Form')
      return false
    }else if(this.user.resume==''){
      alert('Resume Not Uploaded')
      return false
    }else{
      return true
    }
  }
  validateEmploymentForm(){
    if(this.user.currentEmployer==''){
      alert('Enter Current Employer in Employment Details Form')
      return false
    }else if(this.user.currentDestination==''){
      alert('Enter Current Destination in Employment Details Form')
      return false
    }else if(this.user.currentJobDescription==''){
      alert('Enter Current Job Description in Employment Details Form')
      return false
    }else if(this.user.currentExperience==0){
      alert('Enter Current Experience in Employment Details Form')
      return false
    }else{
      return true
    }
  }
  validateEducationForm(){
    if(this.user.collegeUniversity==''){
      alert('Enter College/University in Education Deatils Form')
      return false
    }else if(this.user.collegePassedOutYear==''){
      alert('Enter College Passed Out Year in Education Deatils Form')
      return false
    }else if(this.user.school==''){
      alert('Enter School in Education Deatils Form')
      return false
    }else if(this.user.schoolPassedOutYear==''){
      alert('Enter School Passed Out in Education Deatils Form')
      return false
    }else if(this.user.skillsQualifications==''){
      alert('Enter Skills/Qualifications in Education Deatils Form')
      return false
    }else if(this.user.certifications==''){
      alert('Enter Certifications in Education Deatils Form')
      return false
    }else{
      return true
    }
  }
  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    
    for(let i=0;i< files.length; i++) {
      formData.append('uploads[]', files[i], files[i]['name']);
    }
    this.userServ.fileupload(formData).subscribe((files) =>{
      if(files){
      this.user.resume = 'http://localhost:8083/uploads/' + files[0].filename;
      this.resmuUploadFlag=false
    }
  });
  }
  
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}
