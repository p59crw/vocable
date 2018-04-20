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

  constructor(private ipa: IpaService, private inventoryService: InventoryService) {

  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.ipa.initIPA();
    this.nasals = this.ipa.nasals;
    this.stops = this.ipa.stops;
    this.sibilantAffricates = this.ipa.sibilantAffricates;
    this.nonsibilantAffricates = this.ipa.nonsibilantAffricates;
    this.sibilantFricatives = this.ipa.sibilantFricatives;
    this.nonsibilantFricatives = this.ipa.nonsibilantFricatives;
    this.approximants = this.ipa.approximants;
    this.taps = this.ipa.taps;
    this.trills = this.ipa.trills;
    this.lateralAffricates = this.ipa.lateralAffricates;
    this.lateralFricatives = this.ipa.lateralFricatives;
    this.lateralApproximants = this.ipa.lateralApproximants;
    this.lateralTaps = this.ipa.lateralTaps;
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
