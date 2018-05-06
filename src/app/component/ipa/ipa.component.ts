import { Component, OnInit } from '@angular/core';
import { Consonant, Inventory, Vowel } from './../../class/index';
import { IpaService } from './../../service/index';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];

  constructor(private ipaService: IpaService, private inventory: Inventory) { }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.ipaService.initIPA();
    this.consonants = this.ipaService.consonants;
  }

  updateInventory(item) {
    this.inventory.updateInventory(item);
  }

  clearInventory() {
    this.inventory.clearInventory();
  }

  lockInventory() {
    this.inventory.lockInventory();
  }

  saveInventory() {
    this.inventory.saveInventory();
  }

  loadInventory() {
    this.inventory.loadInventory();
  }

  noneSelected() {
    return !this.inventory.inventory.some(item => item.isSelected);
  }

  isInventoryLocked() {
    return this.inventory.inventoryLocked;
  }

}
