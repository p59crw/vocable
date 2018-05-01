import { Injectable } from '@angular/core';
import { Consonant, Gloss, Parser, Permuter, Sound, Vowel } from './../class/index';
import { InventoryService } from './inventory.service';

@Injectable()
export class TranscriptionService {

  // Constructor
  constructor(private inventoryService: InventoryService, private parser: Parser,
    private permuter: Permuter) { }

  /**
  * Called when submit button is clicked. Started permutation process and
  * returns permutations to be shown on page.
  * @returns  array of permutations
  */
  public generateGlosses(): Array<string> {
    return this.permuter.generateWords(this.parser.parseWordStructure()[0],
      this.parser.parseWordStructure()[1], this.inventoryService.getInventory());
  }

}
