import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  registerUser() {
    this.auth.registerUser(this.registerUserData)
    .subscribe(res => {
      console.log(res);
    },
    err => {
      console.log(err);
    });
  }

}
