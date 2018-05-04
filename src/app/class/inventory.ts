import { Consonant, Sound, Vowel } from './../class/index';

export class Inventory {

  inventory: Array<any> = new Array();
  inventoryLocked = false;

  constructor() { }

  updateInventory(item) {
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

  addItem(item) {
    this.inventory.push(item);
    item.isSelected = true;
  }

  removeItem(item) {
    item.isSelected = false;
    this.inventory.splice(this.inventory.indexOf(item), 1);
  }

  clearInventory() {
    let i;
    for (i = 0; i < this.inventory.length; i++) {
      this.inventory[i].isSelected = false;
    }
    this.inventory = [];
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

  }

  loadInventory() {

  }

}
