import { Injectable } from '@angular/core';
import {
  Consonant, Gloss, Inventory, NotYetImplementedError,
  Parser, WordStructure, Word
} from './../class/index';

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

  public generatePhonetics(glosses: Array<Word>, structure: string): Array<string> {
    throw new NotYetImplementedError('generatePhonetics()');
  }

}
