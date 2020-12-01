import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import * as $ from 'jquery'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  id
  user:any={}
  resmuUploadFlag=true
  filesToUpload: Array<File> =[];
  constructor(private activateRoute:ActivatedRoute,private userServ:UserService,private route:Router) {
    this.id=activateRoute.snapshot.params.id
    console.log(this.id)
   }
  ngOnInit(): void {
    $(document).ready(function () {

      var navListItems = $('div.setup-panel div a'),
              allWells = $('.setup-content'),
              allNextBtn = $('.nextBtn');
  
      allWells.hide();
  
      navListItems.click(function (e) {
          e.preventDefault();
          var $target = $($(this).attr('href')),
                  $item = $(this);
          if (!$item.hasClass('disabled')) {
              navListItems.removeClass('btn-secondary').addClass('btn-outline-secondary');
              $item.removeClass('btn-outline-secondary').addClass('btn-secondary');
              allWells.hide();
              $target.show();
              $target.find('input:eq(0)').focus();
          }
      });
  
      allNextBtn.click(function(){
          var curStep = $(this).closest(".setup-content"),
              curStepBtn = curStep.attr("id"),
              nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
              isValid = true;  
          if (isValid)
              nextStepWizard.removeAttr('disabled').trigger('click');
      });
  
      $('div.setup-panel div a.temp').trigger('click');
  });

  this.user={
    firstname:'',
    lastname:'',
    email:'',
    contactNumber:'',
    password:'',
    address:'',
    skills:'',
    resume:'',
    currentEmployer:'',
    currentDestination:'',
    currentJobDescription:'',
    currentExperience:'',
    previousEmployer:'',
    previousDestination:'',
    previousJobDescription:'',
    previousExperience:'',
    collegeUniversity:'',
    collegePassedOutYear:'',
    school:'',
    schoolPassedOutYear:'',
    skillsQualifications:'',
    certifications:''
  }

  }
  submit(flag){
    if(flag==1||flag==2||flag==3){
      if(this.validatePersonalForm()!=false && flag==1){
          this.register()
      }
    }
    if(flag==2){
      if(this.validateEmploymentForm()!=false){
        this.register()
      }
    }
    if(flag==3){
      if(this.validateEducationForm()!=false){
        if(this.user.currentEmployer!=''){
          if(this.validateEmploymentForm()){
          this.register()
          }
        }else{
          this.register()
        }
      }
    }
  }
  register(){
    this.userServ.postUser(this.user).subscribe((res)=>{
      alert('Registered Successfully')
      this.route.navigateByUrl('')
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
    if(this.user.currentEmployer=='' && this.id=='experienced'){
      alert('Enter Current Employer in Employment Details Form')
      return false
    }else if(this.user.currentDestination=='' && this.id=='experienced'){
      alert('Enter Current Destination in Employment Details Form')
      return false
    }else if(this.user.currentJobDescription=='' && this.id=='experienced'){
      alert('Enter Current Job Description in Employment Details Form')
      return false
    }else if(this.user.currentExperience=='' && this.id=='experienced'){
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
