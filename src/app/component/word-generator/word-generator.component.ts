import { Component, OnInit } from '@angular/core';
import { ProfileService } from './../../service/profile.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-word-generator',
  templateUrl: './word-generator.component.html',
  styleUrls: ['./word-generator.component.css']
})
export class WordGeneratorComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      res => { },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 500) {
            localStorage.removeItem('token');
            this.router.navigate(['/home']);
          }
        }
      }
    );
  }

}
