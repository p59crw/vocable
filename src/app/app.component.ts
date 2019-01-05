import { Component, OnInit } from '@angular/core';
import { AuthenticationService, LoaderService } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoader: boolean;

  constructor(private auth: AuthenticationService, private loaderService: LoaderService) { }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById('sidenav-wrapper').style.width = '250px';
    document.getElementById('page-content-wrapper').style.marginLeft = '250px';
  }

  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById('sidenav-wrapper').style.width = '0';
    document.getElementById('page-content-wrapper').style.marginLeft = '0';
  }

  /* Check whether user is currently logged in */
  isAuthenticated() {
    if (localStorage.key(0)) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
}
