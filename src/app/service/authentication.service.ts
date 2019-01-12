import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private config: ConfigService, private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this.config._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this.config._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  /* Check whether user is currently logged in */
  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  /* Retrieve current user token */
  getToken() {
    return localStorage.getItem('token');
  }

}
