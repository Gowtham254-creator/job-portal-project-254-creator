import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';  // Inject AuthService to check login status

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    // If the user is logged in, allow access
    if (this.authService.isLoggedIn()) {
      return true;
    }

    // If the user is not logged in, redirect them to the login page
    this.router.navigate(['/login']);
    return false;  // Deny access
  }
}
