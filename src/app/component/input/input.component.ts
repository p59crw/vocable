import { Component, AfterContentInit } from '@angular/core';
import { ErrorService, TranscriptionService } from './../../service/index';
import { Consonant, EmptyInputError, EmptyInventoryError, Gloss, Inventory, Word } from './../../class/index';
import { PartOfSpeech } from './../../enum/part-of-speech.enum';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterContentInit {

  glosses: Array<Word> = [];
  glossesAsString: Array<any> = [];
  phonemes: Array<string> = [];
  wordStructureInput: HTMLInputElement;
  ruleInput: HTMLInputElement;
  soundInventory = this.inventory.getInventory();
  partsOfSpeech: Array<PartOfSpeech> = [];
  languageName = '';

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

    this.glosses = this.transcriptionService.generateGlosses(this.wordStructureInput.value);
    this.glossesAsString = this.displayGlosses(this.glosses);

    this.phonemes = this.transcriptionService.generatePhonetics(this.glosses, this.ruleInput.value);
  }

  displayGlosses(glosses: Array<Word>): Array<any> {
    const glossesToReturn = new Array<any>();
    glosses.forEach(function(gloss) {
      glossesToReturn.push(gloss.toString());
    });

    return glossesToReturn;
  }

  changePartOfSpeech(item, value) {
    const index = this.glossesAsString.indexOf(item);
    this.glossesAsString[index].partOfSpeech = value;
    this.glosses[index].partOfSpeech = value;
  }

  changeDefinition(item, value) {
    const index = this.glossesAsString.indexOf(item);
    this.glossesAsString[index].definition = value;
    this.glosses[index].definition = value;
  }

  setLanguageName(value) {
    this.languageName = value;
  }

  deleteGloss(item) {
    const glossIndex = this.glosses.indexOf(item);
    this.glosses.splice(glossIndex, 1);
    const displayIndex = this.glossesAsString.indexOf(item);
    this.glossesAsString.splice(displayIndex, 1);
  }

  reset() {
    this.wordStructureInput.value = '';
    this.ruleInput.value = '';
  }

  saveOutput() {
    let JSON_File = '';
    this.glossesAsString.forEach(function(word) {
      JSON_File = JSON_File.concat(word.gloss + '\n' + word.partOfSpeech + '\n' + word.definition + '\n\n');
    });

    const filename = 'dictionary.csv';

    const pdf = new jsPDF();
    pdf.addFont('Doulos SIL', 'normal');
    pdf.setPage(1);
    pdf.setFontSize(48);
    pdf.text('Dictionary of\n' + this.languageName, 50, 50);
    pdf.addPage();
    pdf.setFontSize(10);
    pdf.text(20, 20, JSON_File);
    pdf.save(filename.replace('.csv', '.pdf'));
  }

  ngAfterContentInit() {
    const partsOfSpeech = Object.keys(PartOfSpeech);
    for (let i = 0; i < partsOfSpeech.length; i++) {
      this.partsOfSpeech.push(Object.getOwnPropertyDescriptor(PartOfSpeech, partsOfSpeech[i]).value);
    }
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    this.ruleInput = <HTMLInputElement>document.getElementById('phoneme_rules');
  }

}
