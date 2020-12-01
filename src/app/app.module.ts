import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddJobsComponent } from './admin/add-jobs/add-jobs.component';
import { EditJobComponent } from './admin/edit-job/edit-job.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { UsersComponent } from './admin/users/users.component';
import { JobFilterPipe } from './job-filter.pipe';
import { JobDetailsComponent } from './job-details/job-details.component';
import { RelatedJobsComponent } from './related-jobs/related-jobs.component';
import { JobFilter2Pipe } from './job-filter-2.pipe';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { UpdateAccountComponent } from './user-profile/update-account/update-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AddJobsComponent,
    EditJobComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    RegistrationComponent,
    AllJobsComponent,
    UsersComponent,
    JobFilterPipe,
    JobDetailsComponent,
    RelatedJobsComponent,
    JobFilter2Pipe,
    UserProfileComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxDocViewerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
