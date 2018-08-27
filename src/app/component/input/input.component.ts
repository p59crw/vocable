import { Component, AfterContentInit } from '@angular/core';
import { ErrorService, TranscriptionService } from './../../service/index';
import { Consonant, EmptyInputError, EmptyInventoryError, Gloss, Inventory, Word } from './../../class/index';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterContentInit {

  glosses: Array<Word> = [];
  glossesAsString: Array<string> = [];
  phonemes: Array<string> = [];
  wordStructureInput: HTMLInputElement;
  ruleInput: HTMLInputElement;
  soundInventory = this.inventory.getInventory();

  constructor(private inventory: Inventory, private errorService: ErrorService,
    private transcriptionService: TranscriptionService) { }

  checkInput() {
    try {
      this.applyTranscription();
    } catch (e) {
      this.errorService.displayError(e.name, e.message);
    }
  }

  applyTranscription() {
    if (this.wordStructureInput.value === '' || this.ruleInput.value === '') {
      throw new EmptyInputError('At least one input field');
    }
    if (this.soundInventory.length <= 0) {
      throw new EmptyInventoryError();
    }

    const glosses = this.transcriptionService.generateGlosses(this.wordStructureInput.value);
    this.glossesAsString = this.displayGlosses(glosses);

    this.phonemes = this.transcriptionService.generatePhonetics(this.glosses, this.ruleInput.value);
  }

  displayGlosses(glosses: Array<Word>): Array<string> {
    const glossesToReturn = new Array<string>();
    glosses.forEach(function(gloss) {
      glossesToReturn.push(gloss.toString());
    });

    return glossesToReturn;
  }

  reset() {
    this.wordStructureInput.value = '';
    this.ruleInput.value = '';
  }

  ngAfterContentInit() {
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    this.ruleInput = <HTMLInputElement>document.getElementById('phoneme_rules');
  }

}
