import { Component, OnInit } from '@angular/core';
import { Consonant, Vowel } from './../../class/index';
import { IpaService, InventoryService } from './../../service/index';

@Component({
  selector: 'app-ipa',
  templateUrl: './ipa.component.html',
  styleUrls: ['./ipa.component.css']
})
export class IpaComponent implements OnInit {
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];
  nasals: Consonant[] = [];
  stops: Consonant[] = [];
  sibilantAffricates: Consonant[] = [];
  nonsibilantAffricates: Consonant[] = [];
  sibilantFricatives: Consonant[] = [];
  nonsibilantFricatives: Consonant[] = [];
  approximants: Consonant[] = [];
  taps: Consonant[] = [];
  trills: Consonant[] = [];
  lateralAffricates: Consonant[] = [];
  lateralFricatives: Consonant[] = [];
  lateralApproximants: Consonant[] = [];
  lateralTaps: Consonant[] = [];

  constructor(private ipaService: IpaService, private inventoryService: InventoryService) {

  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.ipaService.initIPA();
    this.nasals = this.ipaService.nasals;
    this.stops = this.ipaService.stops;
    this.sibilantAffricates = this.ipaService.sibilantAffricates;
    this.nonsibilantAffricates = this.ipaService.nonsibilantAffricates;
    this.sibilantFricatives = this.ipaService.sibilantFricatives;
    this.nonsibilantFricatives = this.ipaService.nonsibilantFricatives;
    this.approximants = this.ipaService.approximants;
    this.taps = this.ipaService.taps;
    this.trills = this.ipaService.trills;
    this.lateralAffricates = this.ipaService.lateralAffricates;
    this.lateralFricatives = this.ipaService.lateralFricatives;
    this.lateralApproximants = this.ipaService.lateralApproximants;
    this.lateralTaps = this.ipaService.lateralTaps;
  }

  updateInventory(item) {
    this.inventoryService.updateInventory(item);
  }

  clearInventory() {
    this.inventoryService.clearInventory();
  }

  lockInventory() {
    this.inventoryService.lockInventory();
  }

  saveInventory() {
    this.inventoryService.saveInventory();
  }

  loadInventory() {
    this.inventoryService.loadInventory();
  }

  noneSelected() {
    return !this.inventoryService.inventory.some(item => item.isSelected);
  }

  isInventoryLocked() {
    return this.inventoryService.inventoryLocked;
  }

}
