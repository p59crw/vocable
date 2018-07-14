import { Component, AfterContentInit } from '@angular/core';
import { ErrorService, TranscriptionService } from './../../service/index';
import { Consonant, EmptyInputError, EmptyInventoryError, Gloss, Inventory } from './../../class/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  glosses: Array<string> = [];
  wordStructureInput: HTMLInputElement;
  ruleInput: HTMLInputElement;
  soundInventory = this.inventory.getInventory();

  constructor(private inventory: Inventory, private errorService: ErrorService,
    private transcriptionService: TranscriptionService) { }

  checkInput() {
    try {
      this.applyTranscription();
    } catch (e) {
      if (e) {
        this.errorService.displayError(e.message.toString());
      }
    }
  }

  applyTranscription() {
    console.log('Step 1: Take input and generate glosses. (input.component.ts)');
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    this.ruleInput = <HTMLInputElement>document.getElementById('phoneme_rules');
    if (this.wordStructureInput.value === '' || this.ruleInput.value === '') {
      throw new EmptyInputError('At least one input field');
    }
    if (this.soundInventory.length <= 0) {
      throw new EmptyInventoryError();
    }
    this.glosses = this.transcriptionService.generateGlosses(this.wordStructureInput.value);
    console.log('Step 12: Display glosses');
  }

  reset() {
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    this.ruleInput = <HTMLInputElement>document.getElementById('phoneme_rules');
    this.wordStructureInput.value = '';
    this.ruleInput.value = '';
  }

}
