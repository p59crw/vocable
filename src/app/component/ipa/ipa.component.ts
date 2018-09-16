import { Component, OnInit } from '@angular/core';
import { Consonant, Inventory, NullArgumentError, Vowel } from './../../class/index';
import { SpecialCharacters } from './../../enum/index';
import { ErrorService, IpaService } from './../../service/index';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {
  coarticulated_consonants: Consonant[] = [];
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];

  constructor(private errorService: ErrorService, private ipaService: IpaService,
    private inventory: Inventory) { }

  ngOnInit() {
    try {
      this.initChart();
    } catch (e) {
      this.errorService.displayError(e.name, e.message);
    }
  }

  async initChart() {
    if (this.ipaService.consonants.length === 0 || this.ipaService.vowels.length === 0) {
      await this.ipaService.initIPA();
    }
    this.coarticulated_consonants = this.ipaService.coarticulated_consonants;
    this.consonants = this.ipaService.consonants;
    this.vowels = this.ipaService.vowels;

    if (this.coarticulated_consonants === null) {
      throw new NullArgumentError('Consonants array');
    }
    if (this.consonants === null) {
      throw new NullArgumentError('Consonants array');
    }
    if (this.vowels === null) {
      throw new NullArgumentError('Vowels array');
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
