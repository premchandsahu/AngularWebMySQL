import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private userDetails: any;

  login(user: any): void {
    this.isAuthenticated = true;
    this.userDetails = user; // Save user details here (e.g., token, name, etc.)
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userDetails = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserDetails(): any {
    return this.userDetails;
  }
}
