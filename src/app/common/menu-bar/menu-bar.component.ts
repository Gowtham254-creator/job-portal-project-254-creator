import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  isLoggedIn = false;
  username: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  login(): void {
    // Simulate a login request
    this.username = 'johnDoe';
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', this.username);
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    // Simulate a logout request
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }

  checkLoginStatus(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('username');
    }
  }
}
