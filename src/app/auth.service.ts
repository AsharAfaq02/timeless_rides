import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router'; 
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  private authToken: string | null = null;

  constructor() { }

  setAuthToken(token: string) {
    this.authToken = token;
    // Optionally, you can store the token in localStorage or sessionStorage for persistence
    localStorage.setItem('authToken', token);
  }

  getAuthToken(): string | null {
    // Retrieve the token from memory or storage
    return this.authToken || localStorage.getItem('authToken');
  }

  clearAuthToken() {
    this.authToken = null;
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    // Check if the user is authenticated based on the presence of the token
    return !!this.getAuthToken();
  }
}
