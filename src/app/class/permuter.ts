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
    // console.log(this.permutate(wordStructureComponents[0][1]));
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
    const glosses = new Array();
    const permutate = function(elements) {
      let string = '';
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

  public permutate(inputArr) {
    const result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          const curr = arr.slice();
          const next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };

    permute(inputArr);

    return result;
  }

}
