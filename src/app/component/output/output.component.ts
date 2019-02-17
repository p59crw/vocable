import { Component, OnInit } from '@angular/core';
import { OutputService } from './../../service/output.service';
import { Inventory } from './../../class/ipa/inventory';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private inventory: Inventory, private outputService: OutputService) { }

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
  }

}
