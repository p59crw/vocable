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
  arrow1: string;
  arrow2: string;
  arrow3: string;
  arrow4: string;
  isPulmonicTableOpen = true;
  isNonPulmonicTableOpen = true;
  isVowelTableOpen = true;
  isCoarticulatedTableOpen = true;

  constructor(private errorService: ErrorService, private ipaService: IpaService,
    private inventory: Inventory) { }

  ngOnInit() {
    try {
      this.initChart();
      this.arrow1 = SpecialCharacters.upwards_arrow;
      this.arrow2 = SpecialCharacters.upwards_arrow;
      this.arrow3 = SpecialCharacters.upwards_arrow;
      this.arrow4 = SpecialCharacters.upwards_arrow;
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

  toggleTables(className: string) {
    const rows = <HTMLCollectionOf<HTMLTableRowElement>>document.getElementsByClassName(className);

    const rowVisibility = function(style: string) {
      for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = style;
      }
    };

    switch (className) {
      case 'pulmonic_table': {
        if (this.isPulmonicTableOpen) {
          this.isPulmonicTableOpen = false;
          this.arrow1 = SpecialCharacters.downwards_arrow;
          rowVisibility('none');
        } else {
          this.isPulmonicTableOpen = true;
          this.arrow1 = SpecialCharacters.upwards_arrow;
          rowVisibility('');
        }
        break;
      }
      case 'nonpulmonic_table': {
        if (this.isNonPulmonicTableOpen) {
          this.isNonPulmonicTableOpen = false;
          this.arrow2 = SpecialCharacters.downwards_arrow;
          rowVisibility('none');
        } else {
          this.isNonPulmonicTableOpen = true;
          this.arrow2 = SpecialCharacters.upwards_arrow;
          rowVisibility('');
        }
        break;
      }
      case 'vowel_table': {
        if (this.isVowelTableOpen) {
          this.isVowelTableOpen = false;
          this.arrow3 = SpecialCharacters.downwards_arrow;
          rowVisibility('none');
        } else {
          this.isVowelTableOpen = true;
          this.arrow3 = SpecialCharacters.upwards_arrow;
          rowVisibility('');
        }
        break;
      }
      case 'co_articulated_table': {
        if (this.isCoarticulatedTableOpen) {
          this.isCoarticulatedTableOpen = false;
          this.arrow4 = SpecialCharacters.downwards_arrow;
          rowVisibility('none');
        } else {
          this.isCoarticulatedTableOpen = true;
          this.arrow4 = SpecialCharacters.upwards_arrow;
          rowVisibility('');
        }
        break;
      }
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
