import { Consonant } from './consonant';
import { Sound } from './sound';
import { Vowel } from './vowel';

export class Permuter {

  constructor() { }

  /**
  * Assigns sounds to a letter, such as consonants to 'C'. Then these assignments
  * are sent to generateWords() to be permutated.
  * @param wordStructure    array of word structure format with parentheses kept
  * @param uniqueChars      array of wordStructure characters with duplicates removed
  * @param inventory        array of all sounds selected in inventory
  * @returns                array of permutations
  */
  public generateWords(wordStructure: Array<string>, uniqueChars: Array<string>, inventory: Array<Sound>): Array<string> {
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

    return this.permute(wordStructure, wordStructureComponents);
  }

  /**
  * Accepts structure array and array of components. Iterates over components
  * and generates permutations by replacing structure with Sound components.
  * @param structure    array of word structure format
  * @param components   array of sounds assigned to a structural element
  * @returns            array of permutations
  */
  public permute(structure: Array<string>, components: Array<Sound>) {
    const result = [];
    let k = 0;

    /**
    * TODO: The while loop limits results to 5040 permutations, but it is very
    * inconsistent and difficult to control. Should be replaced with something
    * that can be more easily edited, or that is consistent.
    */

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        if (arr.length <= 6) {
          for (let i = 0; i < arr.length; i++) {
            const curr = arr.slice();
            const next = curr.splice(i, 1);
            permute(curr.slice(), m.concat(next));
          }
        } else {
          while (k <= (10 - arr.length)) {
            for (let i = 0; i < arr.length; i++) {
              const curr = arr.slice();
              const next = curr.splice(i, 1);
              permute(curr.slice(), m.concat(next));
              k++;
            }
          }
        }
      }
    };

    permute(components[0][1]);

    console.log(result);

    return result;
  }

}
