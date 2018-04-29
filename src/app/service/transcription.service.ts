import { Injectable } from '@angular/core';
import { Consonant, Gloss, Sound, Vowel } from './../class/index';
import { InventoryService } from './inventory.service';

@Injectable()
export class TranscriptionService {

  wordStructureInput: HTMLInputElement;

  constructor(private inventoryService: InventoryService) { }

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
    return this.prepareComponents(wordStructure, uniqueChars, this.inventoryService.getInventory());
  }

  private prepareComponents(wordStructure: Array<string>, uniqueChars: Array<string>, inventory: Array<Sound>): Array<string> {
    const wordStructureComponents = new Array();
    const assignSoundsToLetter = function(letter: string, sounds: Array<Sound>) {
      wordStructureComponents.push([letter, sounds]);
    };

    uniqueChars.forEach(function(element) {
      switch (element) {
        case 'C': {
          const consonants = inventory.filter(function(item, index, array) {
            return item instanceof Consonant;
          });
          assignSoundsToLetter(element.toString(), consonants);
          break;
        }
        case 'V': {
          const vowels = inventory.filter(function(item, index, array) {
            return item instanceof Vowel;
          });
          assignSoundsToLetter(element.toString(), vowels);
          break;
        }
        default: {
          break;
        }
      }
    });
    return this.generateWords(wordStructure, wordStructureComponents);
  }

  private generateWords(structure: Array<string>, components: Array<string>) {
    const glosses = new Array();
    const permutate = function(array) {

    };
    return null;
  }

  public getGlosses(): Array<string> {
    return this.parseWordStructure();
  }

}
