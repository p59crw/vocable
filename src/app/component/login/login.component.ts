import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.auth.loginUser(this.loginUserData)
      .subscribe(res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
        err => {
          console.log(err);
        });
  }

}
