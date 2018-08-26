import { WordStructureComponent } from './word-structure-component';
import { ParserSymbols } from './../../enum/parser-symbols.enum';
import { NullArgumentError } from './../error/null-argument-error';
import { Sound } from './sound';
import { Consonant } from './consonant';
import { Vowel } from './vowel';
import { Word } from './word';

export class WordStructure {

  components: Array<WordStructureComponent>;

  public getComponents() {
    return this.components;
  }

  // Constructor
  public constructor() {
    this.components = new Array<WordStructureComponent>();
  }

  public WordStructure(list: Array<WordStructureComponent>) {
    this.components = list;
  }

  public parse(str: string): WordStructure {
    if (str === null || '') {
      throw new NullArgumentError('WordStructure String "str"');
    }

    const structure: WordStructure = new WordStructure();

    let isOptional = false;
    for (let i = 0; i < str.length; i++) {
      const character = str.charAt(i);

      // check for special characters.
      switch (character) {
        case ParserSymbols.OPTIONAL_START:
          isOptional = true;
          continue;
        case ParserSymbols.OPTIONAL_END:
          isOptional = false;
          continue;
      }

      // build the component.
      const component: WordStructureComponent = new WordStructureComponent();
      component.isOptional = isOptional;
      component.symbol = character;

      structure.components.push(component);
    }

    return structure;
  }

  /// <summary>
  /// Fills all components that have a matching symbol with the specified characters.
  /// </summary>
  /// <param name="symbol"></param>
  /// <param name="characters"></param>
  public fillComponents(symbol: string, sounds: Array<Sound>): void {
    if (this.components.length === 0) {
      throw new Error('No components to fill.');
    }

    this.components.forEach(function(component) {
      if (component.symbol === symbol) {
        if (symbol === 'C') {
          let filteredConsonants = sounds.filter(function(item, index, array) {
            return item instanceof Consonant;
          });
          filteredConsonants.forEach(function(consonant) {
            let newWord = new Word();
            newWord.sounds.push(consonant);
            component.words.push(newWord);
          });
        }
        if (symbol === 'V') {
          let filteredVowels = sounds.filter(function(item, index, array) {
            return item instanceof Vowel;
          });
          filteredVowels.forEach(function(vowel) {
            let newWord = new Word();
            newWord.sounds.push(vowel);
            component.words.push(newWord);
          });
        }
      }
    });
  }

  /// <summary>
  /// Builds the structure's comprehensive list of words.
  /// </summary>
  /// <returns></returns>
  public buildWords() {
    if (this.components.length === 0) {
      throw new Error('At least one component must exist to build words.');
    }

    let words = new Array<Word>();

    const structures = this.getStructureSubsets();
    structures.forEach(function(structure) {
      // TODO: Trace program from input to here. This line returns a NotAFunction error.
      // Some piece of structure is possibly missing along the way.
      words = words.concat(structure.permutateAllComponents());
    });

    // Return distinct words
    return words.filter((x, i, a) => a.indexOf(x) === i);
  }

  /// <summary>
  /// Returns the <see cref="WordStructure"/>'s unparsed string.
  /// </summary>
  /// <returns></returns>
  public toString(): string {
    let output = '';
    this.components.forEach(function(component) {
      if (component.isOptional) {
        output += ParserSymbols.OPTIONAL_START
          + component.symbol.toString()
          + ParserSymbols.OPTIONAL_END.toString();
      } else {
        output += component.symbol.toString();
      }
    });

    return output;
  }

  /// <summary>
  /// Returns a list of all subset structures based on this word structure.
  /// Subsets exist when optional components exist in the word structure.
  /// </summary>
  /// <returns></returns>
  private getStructureSubsets(): Array<WordStructure> {
    // initialize list of word structures starting with this one.
    const structures = new Array<WordStructure>();
    const rootStructure = new WordStructure();
    this.components.forEach(function (component) {
      rootStructure.components.push(component);
    });
    structures.push(rootStructure);

    // generate the combinations of subsets for this word structure.
    this.getCombinations(this, structures);

    // since the GetCombinations method returns duplicate word structures,
    // we want to return a distinct list.
    return structures.filter((x, i, a) => a.indexOf(x) === i);
  }

  /// <summary>
  /// Generates all subset <see cref="WordStructure"/> combinations of the <see cref="WordStructure"/> passed in.
  /// </summary>
  /// <param name="instr"></param>
  /// <param name="outstr"></param>
  private async getCombinations(instr: WordStructure, outstr: Array<WordStructure>) {
    const comps = instr.components;
    for (let i = 0; i < comps.length; i++) {
      const wsc: WordStructureComponent = instr.components[i];
      if (wsc.isOptional) {
        comps.splice(i, 1);
        const str = new WordStructure();
        str.WordStructure(comps);
        outstr.push(str);
        await this.getCombinations(str, outstr);
        comps.splice(i, 0, wsc);
      }
    }
  }

  /// <summary>
  /// Creates a permutation of words using all components in this word structure.
  /// </summary>
  /// <returns></returns>
  public permutateAllComponents(): Array<Word> {
    let words = new Array<Word>();

    // if only one component exists, we'll just add it's characters to the word list.
    // otherwise, we'll loop through the components and permutate their characters.
    if (this.components.length === 1) {
      this.components[0].words.forEach(function(word) {
        words.push(word);
      });
    } else {
      let currentComponent: WordStructureComponent = null;

      for (let i = 0; i < this.components.length; i++) {
        const nextComponent = this.components[i];
        if (currentComponent === null) {
          currentComponent = nextComponent;
          continue;
        } else {
          const list = currentComponent.permutate(nextComponent);
          currentComponent = new WordStructureComponent();
          currentComponent.WordStructureComponent(list);
          words = words.concat(list);
        }
      }

      let tempComponents = this.getComponents()

      const tooFewChars = function(element: Word, index, array) {
        return (element.sounds.length >= tempComponents.length);
      };

      // remove words that have less characters than the number of components.
      words.filter(tooFewChars);
    }

    return words;
  }
}
