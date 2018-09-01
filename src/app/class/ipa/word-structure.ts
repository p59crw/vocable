import { WordStructureComponent } from './word-structure-component';
import { ParserSymbols } from './../../enum/parser-symbols.enum';
import { GenericError } from './../error/generic-error';
import { NullArgumentError } from './../error/null-argument-error';
import { Sound } from './sound';
import { Consonant } from './consonant';
import { Vowel } from './vowel';
import { Word } from './word';
import './../../extensions/array.extensions';

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
    this.components = list.shallowCopy();
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

    const filteredConsonants = sounds.filter(function(item) {
      return (<Consonant>item instanceof Consonant);
    });

    const filteredVowels = sounds.filter(function(item) {
      return (<Vowel>item instanceof Vowel);
    });

    const filteredSounds = sounds.filter(function(item) {
      return item.ipa_unicode === symbol;
    });

    this.components.forEach(function(component) {
      if (component.symbol === symbol) {
        if (symbol === 'C') {
          filteredConsonants.forEach(function(consonant) {
            const newWord = new Word();
            newWord.sounds.push(<Sound>consonant);
            component.words.push(newWord);
          });
        }
        if (symbol === 'V') {
          (<Array<Vowel>>filteredVowels).forEach(function(vowel) {
            const newWord = new Word();
            newWord.sounds.push(<Sound>vowel);
            component.words.push(newWord);
          });
        }
        if (symbol === 'N') {
          (<Array<Consonant>>filteredConsonants).forEach(function(consonant) {
            if (consonant.manner === 'Nasal') {
              const newWord = new Word();
              newWord.sounds.push(<Sound>consonant);
              component.words.push(newWord);
            }
          });
        }
        if (symbol === 'P') {
          (<Array<Consonant>>filteredConsonants).forEach(function(consonant) {
            if (consonant.manner === 'Stop') {
              const newWord = new Word();
              newWord.sounds.push(<Sound>consonant);
              component.words.push(newWord);
            }
          });
        }
        if (symbol === 'A') {
          (<Array<Consonant>>filteredConsonants).forEach(function(consonant) {
            if (consonant.manner === 'Approximant') {
              const newWord = new Word();
              newWord.sounds.push(<Sound>consonant);
              component.words.push(newWord);
            }
          });
        }
        if (symbol === symbol.toLowerCase()) {
          if (filteredSounds.length === 0) {
            throw new GenericError('Invalid Input', 'You have entered a character that has not been added to your inventory.');
          } else {
            filteredSounds.forEach(function(sound) {
              const newWord = new Word();
              newWord.sounds.push(sound);
              component.words.push(newWord);
            });
          }
        }
      }
    });
  }

  /// <summary>
  /// Builds the structure's comprehensive list of words.
  /// </summary>
  /// <returns></returns>
  public buildWords(): Array<Word> {
    if (this.components.length === 0) {
      throw new Error('At least one component must exist to build words.');
    }

    let words: Array<Word> = new Array<Word>();

    const structures = this.getStructureSubsets();
    structures.sort();
    structures.forEach(function(structure) {
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
          + component.symbol
          + ParserSymbols.OPTIONAL_END;
      } else {
        output += component.symbol;
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
    let structures = new Array<WordStructure>();
    const rootStructure = new WordStructure();
    this.components.forEach(function(component) {
      rootStructure.components.push(component);
    });
    structures.push(rootStructure);

    // generate the combinations of subsets for this word structure.
    this.getCombinations(this, structures);

    function uniqBy(a, key) {
      const seen = {};
      return a.filter(function(item) {
        const k = key(item);
        return seen.hasOwnProperty(k) ? false : (seen[k] = true);
      });
    }

    // since the GetCombinations method returns duplicate word structures,
    // we want to return a distinct list.
    structures = uniqBy(structures, JSON.stringify);
    return structures;
  }

  /// <summary>
  /// Generates all subset <see cref="WordStructure"/> combinations of the <see cref="WordStructure"/> passed in.
  /// </summary>
  /// <param name="instr"></param>
  /// <param name="outstr"></param>
  private async getCombinations(instr: WordStructure, outstr: Array<WordStructure>) {
    let comps = instr.components.shallowCopy();
    for (let i = 0; i < comps.length; i++) {
      const wsc: WordStructureComponent = instr.components[i];
      if (wsc.isOptional) {
        comps.splice(i, 1);
        const str = new WordStructure();
        str.WordStructure(comps);
        outstr.push(str);
        this.getCombinations(str, outstr);
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

      const tempComponents: Array<WordStructureComponent> = this.getComponents();

      // Remove words that have fewer characters than the number of components.
      words = words.filter(element => element.sounds.length >= tempComponents.length);
    }

    return words;
  }
}
