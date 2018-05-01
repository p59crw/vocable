import { Injectable } from '@angular/core';
import { Consonant, Gloss, Sound, Vowel } from './../class/index';
import { InventoryService } from './inventory.service';
import { ParserService } from './parser.service';
import { PermutatorService } from './permutator.service';

@Injectable()
export class TranscriptionService {

  // Constructor
  constructor(private inventoryService: InventoryService, private parser: ParserService,
    private permutator: PermutatorService) { }

  /**
  * Called when submit button is clicked. Started permutation process and
  * returns permutations to be shown on page.
  * @returns  array of permutations
  */
  public generateGlosses(): Array<string> {
    return this.permutator.generateWords(this.parser.parseWordStructure()[0],
      this.parser.parseWordStructure()[1], this.inventoryService.getInventory());
  }

}
