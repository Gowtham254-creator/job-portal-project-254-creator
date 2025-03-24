import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Import the necessary routing module
import { AppComponent } from './app/app.component'; // Import AppComponent
import { HomeComponent } from './app/pages/home/home.component'; // Import HomeComponent
import { JobListComponent } from './app/pages/job-list/job-list.component'; // Import JobListComponent
import { JobPostComponent } from './app/pages/job-post/job-post.component'; // Import JobPostComponent
import { EnquiriesComponent } from './app/pages/enquiries/enquiries.component'; // Import EnquiriesComponent

import { MenubarComponent } from './app/common/menu-bar/menu-bar.component'; // Import MenuBarComponent
import { FooterComponent } from './app/common/footer/footer.component'; // Import FooterComponent

// Define the application routes
const routes = [
  { path: '', component: HomeComponent },  // Home route
  { path: 'job-list', component: JobListComponent },  // Job List route
  { path: 'job-post', component: JobPostComponent },  // Job Post route
  { path: 'enquiries', component: EnquiriesComponent }  // Enquiries route
];

// Bootstrap the standalone AppComponent with the router configuration and required components
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Provide the routes to the application
  ]
}).catch(err => console.error(err));
