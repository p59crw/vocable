export class Parser {

  wordStructureInput: HTMLInputElement;

  constructor() { }

  /**
  * Reads input from wordStructureInput element, removes duplicates, and creates
  * arrays which are sent to prepareComponents() where sounds are assigned to
  * characters.
  * @param wordStructure    array of word structure format with parentheses kept
  * @param uniqueChars      array of wordStructure characters with duplicates removed
  * @returns                array of permutations
  */
  public parseWordStructure(): Array<string[]> {
    this.wordStructureInput = <HTMLInputElement>document.getElementById('word_structure');
    const wordStructure = [];
    let uniqueChars = [];
    let isOptional = false;

    const removeDuplicates = function(array: Array<string>) {
      return array.reduce(function(accum, current) {
        if (accum.indexOf(current) < 0) {
          accum.push(current);
        }
        return accum;
      }, []);
    };

    for (let i = 0; i < this.wordStructureInput.value.length; i++) {
      if (this.wordStructureInput.value.charAt(i) === '(') {
        isOptional = true;
        wordStructure.push(this.wordStructureInput.value.charAt(i));
      } else if (this.wordStructureInput.value.charAt(i) === ')') {
        isOptional = false;
        wordStructure.push(this.wordStructureInput.value.charAt(i));
      } else {
        wordStructure.push([this.wordStructureInput.value.charAt(i).toUpperCase(), isOptional]);
        uniqueChars.push(this.wordStructureInput.value.charAt(i).toUpperCase());
      }
    }

    uniqueChars = removeDuplicates(uniqueChars);
    return [wordStructure, uniqueChars];
  }


}
