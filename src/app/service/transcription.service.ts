import { Injectable } from '@angular/core';
import {
  Consonant, Gloss, Inventory, NotYetImplementedError,
  Parser, WordStructure
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
  public generateGlosses(structure: string): Array<string> {

    let wordStructure = new WordStructure();
    let parser = new Parser();

    const uniqueChars = parser.getUniqueChars(structure);
    const parsedWordStructure = wordStructure.parse(structure);

    for (let i = 0; i < uniqueChars.length; i++) {
      parsedWordStructure.fillComponents(uniqueChars[i].toString(), this.inventory.getInventory());
    }

    const words = parsedWordStructure.buildWords();
    console.log('Step 11: Return filtered words for display. (transcription.service.ts)');
    console.log("Words = " + words);
    return words;
  }

  public generatePhonetics(glosses: Array<string>, structure: string): Array<string> {
    throw new NotYetImplementedError("generatePhonetics()");
  }

}
