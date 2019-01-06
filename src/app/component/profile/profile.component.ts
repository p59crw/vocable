import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../service/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile = {};

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      res => this.profile = res,
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/home']);
          }
        }
      }
    );
  }

}
