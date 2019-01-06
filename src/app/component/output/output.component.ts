import { Component, OnInit } from '@angular/core';
import { OutputService } from './../../service/output.service';
import { Inventory } from './../../class/ipa/inventory';
import { ProfileService } from './../../service/profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private inventory: Inventory, private outputService: OutputService,
    private profileService: ProfileService, private router: Router) { }

  languageFinalized: boolean;

  saveToPDF() {
    this.outputService.saveToPDF();
  }

  saveToDoc() {
    this.outputService.saveToDoc();
  }

  setLanguageName(value) {
    this.outputService.languageName = value;
  }

  ngOnInit() {
    if (this.inventory.dictionary.length === 0) {
      this.languageFinalized = false;
    } else {
      this.languageFinalized = true;
    }
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
