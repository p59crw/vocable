import { Component, AfterContentInit } from '@angular/core';
import { ErrorService, OutputService, TranscriptionService } from './../../service/index';
import { EmptyInputError, EmptyInventoryError, Inventory, StringValidator, TranscriptionRule, Word } from './../../class/index';
import { PartOfSpeech } from './../../enum/part-of-speech.enum';
import { Regex } from './../../enum/regex.enum';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements AfterContentInit {

  glosses: Array<Word> = [];
  glossesAsString: Array<any> = [];
  phonemes: Array<Word> = [];
  wordStructureInput: HTMLInputElement;
  ruleInput: HTMLInputElement;
  rules: Array<string>;
  transcriptionRuleArray: Array<TranscriptionRule>;
  soundInventory = this.inventory.getInventory();
  partsOfSpeech: Array<PartOfSpeech> = [];
  languageName = '';

  constructor(private inventory: Inventory, private errorService: ErrorService,
    private outputService: OutputService, private transcriptionService: TranscriptionService) { }

  runGenerator() {
    try {
      this.checkInput();
      this.applyTranscription();
    } catch (e) {
      this.errorService.displayError(e.name, e.message);
    }
  }

  checkInput() {
    const validator = new StringValidator();

    this.rules = new Array<string>();
    this.rules = this.ruleInput.value.replace(' ', '').split(';');
    this.rules.pop();

    function containsSemiColon(rule: string) {
      return rule.includes(':');
    }

    function containsBrackets(rule: string) {
      return rule.includes('<') && rule.includes('>');
    }

    if (this.soundInventory.length <= 0) {
      throw new EmptyInventoryError();
    }
    if (this.wordStructureInput.value === '') {
      throw new EmptyInputError('Word structure input field');
    }
    if (!validator.validate(Regex.WORD_STRUCTURE_RULE, this.wordStructureInput.value)) {
      throw new SyntaxError('Incorrect word structure syntax. Include only parentheses () and letters. Please correct and try again.');
    }
    // TODO: Replace the if statements below with a regex validation like the one directly above.
    if (this.ruleInput.value === '') {
      throw new EmptyInputError('Transcription rule input field');
    }
    if (!this.ruleInput.value.endsWith(';')) {
      throw new SyntaxError('Please end each rule with a semicolon (;).');
    }
    if (!this.rules.every(containsSemiColon) || !this.rules.every(containsBrackets)) {
      throw new SyntaxError('Incorrect rule syntax. Please correct and try again.');
    }
  }

  applyTranscription() {
    const transcriptionRuleArray = new Array<TranscriptionRule>();
    this.rules.forEach((rule) => {
      transcriptionRuleArray.push(new TranscriptionRule(rule));
    });

    this.glosses = this.transcriptionService.generateGlosses(this.wordStructureInput.value);
    const filteredGlosses = this.glosses.filter((x, i, a) => x && a.indexOf(x) === i);
    this.glossesAsString = this.displayGlosses(filteredGlosses);

    this.phonemes = this.transcriptionService.generatePhonetics(filteredGlosses, transcriptionRuleArray);
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

  addToDictionary(items: Array<any>) {
    items.forEach((word) => this.inventory.dictionary.push(word));
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
