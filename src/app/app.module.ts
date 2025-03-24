import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule for routing
import { FormsModule } from '@angular/forms';  // Import FormsModule to use ngModel

// Import Components
import { MenubarComponent } from './common/menu-bar/menu-bar.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './common/login/login.component';
import { AppComponent } from './app.component';
import { JobFilterPipe } from './job-filter.pipe';  // Import your main AppComponent

@NgModule({
  declarations: [
    AppComponent,  // Declare your root component
    MenubarComponent,  // Declare MenubarComponent here
    FooterComponent,   // Declare FooterComponent here
    LoginComponent, JobFilterPipe,    // Declare LoginComponent here
  ],
  imports: [
    BrowserModule,  // Import BrowserModule to run the application in the browser
    FormsModule,    // Import FormsModule to enable two-way binding with ngModel
    AppRoutingModule,  // Import AppRoutingModule for routing
  ],
  providers: [],
  bootstrap: [AppComponent]  // Set the bootstrap component (root component)
})
export class AppModule { }
