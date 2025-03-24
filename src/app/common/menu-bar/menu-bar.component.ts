import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './common/menu-bar.component.html',
  styleUrls: ['./common/menu-bar.component.css']
})
export class MenubarComponent implements OnInit {
  isLoggedIn = false;
  username: string | null = null;  // Allow `username` to be null initially

  constructor() { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  login(): void {
    this.username = 'johnDoe';
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', this.username);
  }

  logout(): void {
    this.isLoggedIn = false;
    this.username = null;  // Set username to null when logging out
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
  }

  checkLoginStatus(): void {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.isLoggedIn = true;
      const storedUsername = localStorage.getItem('username');
      this.username = storedUsername ? storedUsername : null;  // Handle null value
    }
  }
}
