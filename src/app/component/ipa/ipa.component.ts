import { Component, OnInit } from '@angular/core';
import { Consonant, Inventory, NullArgumentError, Vowel } from './../../class/index';
import { ErrorService, IpaService } from './../../service/index';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];

  constructor(private errorService: ErrorService, private ipaService: IpaService,
    private inventory: Inventory) { }

  ngOnInit() {
    try {
      this.initChart();
    } catch (e) {
      if (e instanceof NullArgumentError) {
        this.errorService.displayError(e.message.toString());
      }
    }
  }

  initChart() {
    this.ipaService.initIPA();
    this.consonants = this.ipaService.consonants;
    if (this.consonants === null) {
      throw new NullArgumentError('Consonants array');
    }
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
