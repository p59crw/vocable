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

  private permuteHelper(arr, index) {
    let string = '';
    if (index >= arr.length - 1) {
      for (let i = 0; i < arr.length - 1; i++) {
        string = arr[i];
      }
      if (arr.length > 0) {
        string = arr[arr.length - 1];
      }
      return;
    }

    for (let i = index; i < arr.length; i++) {
      let t = arr[index];
      arr[index] = arr[i];
      arr[i] = t;

      this.permuteHelper(arr, index + 1);

      t = arr[index];
      arr[index] = arr[i];
      arr[i] = t;
    }
  }

}
