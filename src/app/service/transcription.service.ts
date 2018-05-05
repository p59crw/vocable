import { Injectable } from '@angular/core';
import { Consonant, Gloss, Inventory, Parser, Permuter, Sound, Vowel } from './../class/index';

@Injectable()
export class TranscriptionService {

  // Constructor
  constructor(private inventory: Inventory, private parser: Parser,
    private permuter: Permuter) { }

  /**
  * Called when submit button is clicked. Started permutation process and
  * returns permutations to be shown on page.
  * @returns  array of permutations
  */
  public generateGlosses(): Array<string> {
    return this.permuter.generateWords(this.parser.parseWordStructure()[0],
      this.parser.parseWordStructure()[1], this.inventory.getInventory());
  }

}
