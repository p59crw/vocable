export class Parser {

  constructor() { }

  /**
  * Reads input from wordStructureInput element, removes duplicates, and creates
  * arrays which are sent to prepareComponents() where sounds are assigned to
  * characters.
  * @param wordStructure    array of word structure format with parentheses kept
  * @param uniqueChars      array of wordStructure characters with duplicates removed
  * @returns                array of permutations
  */
  public getUniqueChars(structure: string): Array<string> {
    // const wordStructure = [];
    let uniqueChars: Array<string> = [];
    let isOptional = false;

    const removeDuplicates = function(array: Array<string>) {
      return array.reduce(function(accum, current) {
        if (accum.indexOf(current) < 0) {
          accum.push(current);
        }
        return accum;
      }, []);
    };

    for (let i = 0; i < structure.length; i++) {
      if (structure.charAt(i) === '(') {
        isOptional = true;
      } else if (structure.charAt(i) === ')') {
        isOptional = false;
      } else {
        uniqueChars.push(structure.charAt(i));
      }
    }

    uniqueChars = removeDuplicates(uniqueChars);
    return uniqueChars;
  }


}
