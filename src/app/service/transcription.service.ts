import { Injectable } from '@angular/core';
import { Gloss } from './../class/index';

@Injectable()
export class TranscriptionService {

  wordStructureInput: HTMLInputElement;

  constructor() { }

  public parseWordStructure(): Array<string> {
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    const symbols = [];
    let isOptional = false;
    for (let i = 0; i < this.wordStructureInput.value.length; i++) {
      if (this.wordStructureInput.value.charAt(i) === '(') {
        isOptional = true;
      } else if (this.wordStructureInput.value.charAt(i) === ')') {
        isOptional = false;
      } else {
        symbols.push([this.wordStructureInput.value.charAt(i), isOptional]);
      }
    }
    return symbols;
  }

  generatePermutations(array: Array<string>): Array<string> {
    return null;
  }

  public getGlosses(): Array<Gloss> {
    this.generatePermutations(this.parseWordStructure());
    return null;
  }

}
