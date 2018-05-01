import { Component, AfterContentInit } from '@angular/core';
import { InventoryService, TranscriptionService } from './../../service/index';
import { Gloss } from './../../class/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  glosses: Array<string> = [];
  wordStructureInput: HTMLInputElement;
  ruleInput: HTMLInputElement;

  constructor(private inventoryService: InventoryService, private transcriptionService: TranscriptionService) { }

  applyTranscription() {
    if (this.inventoryService.getInventory().length > 0) {
      this.glosses = this.transcriptionService.generateGlosses();
    }
  }

  reset() {
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    this.ruleInput = <HTMLInputElement>document.getElementById('phoneme_rules');
    this.wordStructureInput.value = '';
    this.ruleInput.value = '';
  }

}
