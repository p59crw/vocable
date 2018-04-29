import { Injectable } from '@angular/core';
import { Consonant, Gloss, Sound, Vowel } from './../class/index';
import { InventoryService } from './inventory.service';

@Injectable()
export class TranscriptionService {

  // Variables
  wordStructureInput: HTMLInputElement;

  // Constructor
  constructor(private inventoryService: InventoryService) { }

  /**
  * Reads input from wordStructureInput element, removes duplicates, and creates
  * arrays which are sent to prepareComponents() where sounds are assigned to
  * characters.
  * @param wordStructure    array of word structure format with parentheses kept
  * @param uniqueChars      array of wordStructure characters with duplicates removed
  * @returns                array of permutations
  */
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

  /**
  * Assigns sounds to a letter, such as consonants to 'C'. Then these assignments
  * are sent to generateWords() to be permutated.
  * @param wordStructure    array of word structure format with parentheses kept
  * @param uniqueChars      array of wordStructure characters with duplicates removed
  * @param inventory        array of all sounds selected in inventory
  * @returns                array of permutations
  */
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

  /**
  * Accepts structure array and array of components. Iterates over components
  * and generates permutations by replacing structure with Sound components.
  * @param structure    array of word structure format
  * @param components   array of sounds assigned to a structural element
  * @returns            array of permutations
  */
  private generateWords(structure: Array<string>, components: Array<Sound>) {
    const glosses = new Array();
    let string;
    const permutate = function(elements) {
      for (let i = 0; i < elements[1].length; i++) {
        string += elements[1][i].ipa_unicode;
      }
      return string;
    };
    for (let i = 0; i < components.length; i++) {
      glosses[i] = permutate(components[i]);
    }
    console.log(glosses);
    return glosses;
  }

  /**
  * Called when submit button is clicked. Started permutation process and
  * returns permutations to be shown on page.
  * @returns  array of permutations
  */
  public getGlosses(): Array<string> {
    return this.parseWordStructure();
  }

}
