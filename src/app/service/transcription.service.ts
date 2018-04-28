import { Injectable } from '@angular/core';
import { Gloss } from './../class/index';

@Injectable()
export class TranscriptionService {

  wordStructureInput: HTMLInputElement;

  constructor() { }

  private parseWordStructure(): Array<string> {
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    const wordStructure = [];
    let uniqueChars = [];
    let isOptional = false;

    const removeDuplicates = function(array: Array<string>) {
      return array.reduce(function(accum, current) {
        if (accum.indexOf(current) < 0) {
          accum.push(current);
        }
        return accum;
      }, []);
    };

    for (let i = 0; i < this.wordStructureInput.value.length; i++) {
      if (this.wordStructureInput.value.charAt(i) === '(') {
        isOptional = true;
        wordStructure.push(this.wordStructureInput.value.charAt(i));
      } else if (this.wordStructureInput.value.charAt(i) === ')') {
        isOptional = false;
        wordStructure.push(this.wordStructureInput.value.charAt(i));
      } else {
        wordStructure.push([this.wordStructureInput.value.charAt(i).toUpperCase(), isOptional]);
        uniqueChars.push(this.wordStructureInput.value.charAt(i).toUpperCase());
      }
    }

    uniqueChars = removeDuplicates(uniqueChars);
    return this.generatePermutations(wordStructure, uniqueChars);
  }

  private generatePermutations(wordStructure: Array<string>, uniqueChars: Array<string>): Array<string> {
    return null;
  }

  public getGlosses(): Array<string> {
    return this.parseWordStructure();
  }

}
