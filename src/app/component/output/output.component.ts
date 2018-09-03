import { Component, OnInit } from '@angular/core';
import { OutputService } from './../../service/output.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private outputService: OutputService) { }

  languageFinalized: boolean;

  saveOutput() {
    this.outputService.save();
  }

  setLanguageName(value) {
    this.outputService.languageName = value;
  }

  ngOnInit() {
    if (this.outputService.glossesAsString.length === 0) {
      this.languageFinalized = false;
    } else {
      this.languageFinalized = true;
    }
  }

}
