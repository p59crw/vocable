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
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];
  arrow1: string;
  arrow2: string;
  arrow3: string;
  isPulmonicTableOpen: boolean = true;
  isNonPulmonicTableOpen: boolean = true;
  isVowelTableOpen: boolean = true;

  constructor(private errorService: ErrorService, private ipaService: IpaService,
    private inventory: Inventory) { }

  ngOnInit() {
    try {
      this.arrow1 = SpecialCharacters.upwards_arrow;
      this.arrow2 = SpecialCharacters.upwards_arrow;
      this.arrow3 = SpecialCharacters.upwards_arrow;
      this.initChart();

    } catch (e) {
      if (e) {
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

  toggleTables(className: string) {
    let rows = <HTMLCollectionOf<HTMLTableRowElement>>document.getElementsByClassName(className);
    switch (className) {
      case 'pulmonic_table': {
        if (this.isPulmonicTableOpen) {
          this.isPulmonicTableOpen = false;
          this.arrow1 = SpecialCharacters.downwards_arrow;
          for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = 'none';
          }
        } else {
          this.isPulmonicTableOpen = true;
          this.arrow1 = SpecialCharacters.upwards_arrow;
          for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = '';
          }
        }
        break;
      }
      case 'nonpulmonic_table': {
        if (this.isNonPulmonicTableOpen) {
          this.isNonPulmonicTableOpen = false;
          this.arrow2 = SpecialCharacters.downwards_arrow;
          for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = 'none';
          }
        } else {
          this.isNonPulmonicTableOpen = true;
          this.arrow2 = SpecialCharacters.upwards_arrow;
          for (let i = 0; i < rows.length; i++) {
            rows[i].style.display = '';
          }
        }
        break;
      }
      default: {
        //statements;
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
