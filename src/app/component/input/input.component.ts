import { Component, AfterContentInit } from '@angular/core';
import { TranscriptionService } from './../../service/index';
import { Gloss, Inventory } from './../../class/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  glosses: Array<string> = [];
  wordStructureInput: HTMLInputElement;
  ruleInput: HTMLInputElement;

  constructor(private inventory: Inventory, private transcriptionService: TranscriptionService) { }

  applyTranscription() {
    if (this.inventory.getInventory().length > 0) {
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
