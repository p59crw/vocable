import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = (<any>{});

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    // Temporarily allow logins for testing until nodejs dedicated server is set up.
    localStorage.setItem('token', 'testToken');
    this.router.navigate(['/wordgenerator']);
    // this.auth.loginUser(this.loginUserData)
    //   .subscribe(res => {
    //     localStorage.setItem('token', res.token);
    //     this.router.navigate(['/wordgenerator']);
    //   },
    //     err => {
    //       console.log(err);
    //     });
  }

}
