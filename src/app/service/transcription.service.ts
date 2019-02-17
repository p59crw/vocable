import { Injectable } from '@angular/core';
import {
  Consonant, Gloss, Inventory, NotYetImplementedError,
  Parser, TranscriptionRule, WordStructure, Word, Vowel
} from './../class/index';
import { isType } from '@angular/core/src/type';

@Injectable()
export class TranscriptionService {

  // Constructor
  constructor(private inventory: Inventory) { }

  /**
  * Called when submit button is clicked. Started permutation process and
  * returns permutations to be shown on page.
  * @returns  array of permutations
  */
  public generateGlosses(structure: string): Array<Word> {

    const wordStructure = new WordStructure();
    const parser = new Parser();

    const uniqueChars = parser.getUniqueChars(structure);
    const parsedWordStructure = wordStructure.parse(structure);

    for (let i = 0; i < uniqueChars.length; i++) {
      parsedWordStructure.fillComponents(uniqueChars[i].toString(), this.inventory.getInventory());
    }

    let words: Array<Word> = new Array<Word>();
    words = parsedWordStructure.buildWords();
    return words;
  }

  /**
   * Improve this function with switch statements or break up code
   * into new class to keep file tidy. 
   */
  public generatePhonetics(glosses: Array<Word>, rules: Array<TranscriptionRule>): Array<Word> {
    glosses.forEach((gloss) => {
      rules.forEach((rule) => {
        if (rule.soundToBeChanged.ipa_unicode === 'C') {
          gloss.sounds.forEach(sound => {
            if (sound instanceof Consonant) {
              // Check consonants and see if they meet other criteria
            }
          });
        } else if (rule.soundToBeChanged.ipa_unicode === 'V') {
          gloss.sounds.forEach(sound => {
            if (sound instanceof Vowel) {
              // Check vowels and see if they meet other criteria
            }
          });
        } else {
          if (gloss.sounds.includes(rule.soundToBeChanged)) {
            // Check sound to be changed and change it accordingly.
          }
        }
      });
    });
    throw new NotYetImplementedError('generatePhonetics()');
  }

}
