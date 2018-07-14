import { Injectable } from '@angular/core';
import {
  Consonant, Gloss, Inventory, Parser, Permuter, Sound, Vowel,
  WordStructure
} from './../class/index';

@Injectable()
export class TranscriptionService {

  // Constructor
  constructor(private inventory: Inventory, private parser: Parser,
    private permuter: Permuter, private wordStructure: WordStructure) { }

  /**
  * Called when submit button is clicked. Started permutation process and
  * returns permutations to be shown on page.
  * @returns  array of permutations
  */
  public generateGlosses(structure: string): Array<string> {

    console.log('Step 2: Generate word structure. (transcription.service.ts)');
    /*
     * return this.permuter.generateWords(this.parser.parseWordStructure()[0],
     * this.parser.parseWordStructure()[1], this.inventory.getInventory());
     */
    this.wordStructure = new WordStructure();

    const uniqueChars = this.parser.parseWordStructure(structure);
    const wordStructure = this.wordStructure.parse(structure);

    for (const char of uniqueChars.toString()) {
      wordStructure.fillComponents(char, this.inventory.getInventory());
    }

    const words = wordStructure.buildWords();
    console.log('Step 11: Return filtered words for display. (transcription.service.ts)');
    return words;
  }

}
