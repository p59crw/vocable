import { Component, OnInit } from '@angular/core';
import { Inventory } from './../../class/ipa/inventory';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  dictionary: Array<any> = [];

  constructor(private inventory: Inventory) { }

  ngOnInit() {
    this.dictionary = this.inventory.dictionary;
  }

}
