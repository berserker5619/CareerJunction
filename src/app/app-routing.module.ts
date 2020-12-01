import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './admin/users/users.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { RelatedJobsComponent } from './related-jobs/related-jobs.component';
import { AuthGuard } from './services/auth.guard';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UpdateAccountComponent } from './user-profile/update-account/update-account.component';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  {path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
  {path:'adminLogin',component:LoginComponent},
  {path:'admin/add-jobs',component:AddJobsComponent,canActivate:[AuthGuard]},
  {path:'admin/edit-job/:id',component:EditJobComponent,canActivate:[AuthGuard]},
  {path:'admin/users',component:UsersComponent,canActivate:[AuthGuard]},
  {path:'register/:id',component:RegistrationComponent},
  {path:'all-jobs',component:AllJobsComponent},
  {path:'job-details/:id',component:JobDetailsComponent},
  {path:'related-jobs',component:RelatedJobsComponent},
  {path:'',component:HomeComponent},
  {path:'update-details/:id',component:UpdateAccountComponent,canActivate:[UserGuard]},
  {path:'user-profile/:id',component:UserProfileComponent,canActivate:[UserGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
