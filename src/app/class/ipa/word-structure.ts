import { WordStructureComponent } from './word-structure-component';
import { ParserSymbols } from './../../enum/parser-symbols.enum';
import { NullArgumentError } from './../error/null-argument-error';
import { Sound } from './sound';
import { Consonant } from './consonant';
import { Vowel } from './vowel';

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
          break;

        case ParserSymbols.OPTIONAL_END:
          isOptional = false;
          break;
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
  public fillComponents(symbol: string, characters: Array<Sound>): void {
    if (this.components.length === 0) {
      throw new Error('No components to fill.');
    }

    this.components.forEach(function(component) {
      if (component.symbol === symbol) {
        if (symbol === 'C') {
          component.characters = characters.filter(function(item, index, array) {
            return item instanceof Consonant;
          });
        }
        if (symbol === 'V') {
          component.characters = characters.filter(function(item, index, array) {
            return item instanceof Vowel;
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
    console.log('Step 6: Build words and return them. (word-structure.ts)');
    if (this.components.length === 0) {
      throw new Error('At least one component must exist to build words.');
    }

    const words = new Array<string>();

    const structures = this.getStructureSubsets();
    console.log('Step 7: Generate subsets. Subsets = ' + structures + ' (word-structure.ts)');
    const permutations = this.permutateAllComponents();
    console.log('Step 8: Permutate components. Permutations = ' + permutations + ' (word-structure.ts)');
    structures.forEach(function(structure) {
      // TODO: Trace program from input to here. This line returns a NotAFunction error.
      // Some piece of structure is possibly missing along the way.
      // let permutations = this.permutateAllComponents();
      words.concat(permutations);
      console.log('Step 9: Concat permutations to word list. (word-structure.ts)');
    });

    // Return distinct words
    console.log('Step 10: Filter repeated words. Words before filter = ' + words + ' (word-structure.ts)');
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
  private getStructureSubsets(): Array<WordStructureComponent> {
    // initialize list of word structures starting with this one.
    const structures = new Array<WordStructureComponent>();
    console.log("Components before getting subsets = " + this.components);
    this.components.forEach(function (component) {
  structures.push(component);
});

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
  private getCombinations(instr: WordStructure, outstr: Array<WordStructureComponent>): void {
    const comps = instr.components;
    for (let i = 0; i < comps.length; i++) {
      console.log("Combination " + i);
      const wsc: WordStructureComponent = instr.components[i];
      if (wsc.isOptional) {
        console.log("Splicing " + wsc.characters);
        comps.splice(i, 1);
        const str = new WordStructure();
        str.WordStructure(comps);
        // TODO Fix below statement
        // outstr.push(str);
        console.log("Output string = " + str);
        this.getCombinations(str, outstr);
        comps.splice(i, 0, wsc);
        console.log("Components at end of subset round = " + comps);
      }
    }
  }

  /// <summary>
  /// Creates a permutation of words using all components in this word structure.
  /// </summary>
  /// <returns></returns>
  public permutateAllComponents(): Array<string> {
    const words = new Array<string>();

    // if only one component exists, we'll just add it's characters to the word list.
    // otherwise, we'll loop through the components and permutate their characters.
    if (this.components.length === 1) {
    // TODO Fix below statement
      // words.concat(this.components);
    } else {
      let currentComponent: WordStructureComponent = null;

      this.components.forEach(function(nextComponent) {
        if (currentComponent == null) {
          currentComponent = nextComponent;
        } else {
          const list = currentComponent.permutate(nextComponent);
          currentComponent = new WordStructureComponent();
          // currentComponent.WordStructureComponent(list);
          words.concat(list);
        }
      });

      const tooFewChars = function(element, index, array) {
        return (element.length > this.components.length);
      };

      // remove words that have less characters than the number of components.
      words.filter(tooFewChars);
    }

    return words;
  }
}
