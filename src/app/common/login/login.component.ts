import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logIn() {
    this.authService.logIn();  // Mark user as logged in
    this.router.navigate(['/job-list']);  // Redirect to the job list page
  }
}
