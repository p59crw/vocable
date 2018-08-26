import { Consonant, Sound, Vowel } from './../../class/index';
import * as FileSaver from 'file-saver';

export class Inventory {

  inventory: Array<Sound> = new Array<Sound>();
  inventoryLocked = false;

  constructor() { }

  updateInventory(item: Sound) {
    if (!this.inventoryLocked) {
      if (this.inventory.indexOf(item) > -1) {
        this.removeItem(item);
      } else if (item.ipa_unicode !== null && item.ipa_unicode !== '') {
        this.addItem(item);
      }
    }
  }

  public getInventory() {
    return this.inventory;
  }

  addItem(item: Sound) {
    this.inventory.push(item);
    item.isSelected = true;
  }

  removeItem(item: Sound) {
    item.isSelected = false;
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }

  clearInventory() {
    let i;
    for (i = 0; i < this.inventory.length; i++) {
      this.inventory[i].isSelected = false;
    }
    this.inventory.length = 0;
  }

  lockInventory() {
    const button = document.getElementById('lockInventoryButton');
    if (this.inventoryLocked) {
      this.inventoryLocked = false;
      button.innerText = 'Lock';
    } else {
      this.inventoryLocked = true;
      button.innerText = 'Unlock';
    }
  }

  saveInventory() {
    const JSON_File = '### Your Vocable Inventory ###\n' + JSON.stringify(this.inventory);
    const file = new File([JSON_File], 'vocable_inventory.json', { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(file);
  }

  loadInventory() {

  }

}
