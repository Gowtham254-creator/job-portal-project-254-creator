import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { JobPostComponent } from './pages/job-post/job-post.component';
import { EnquiriesComponent } from './pages/enquiries/enquiries.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'job-post', component: JobPostComponent },
  { path: 'enquiries', component: EnquiriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
