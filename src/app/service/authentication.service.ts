import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
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
