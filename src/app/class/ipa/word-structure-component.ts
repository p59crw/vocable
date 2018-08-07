import { Sound } from './sound';

export class WordStructureComponent {
  isOptional: boolean;
  characters: Array<Sound>;
  symbol: string;

  // Default Constructor
  public constructor() {
    this.characters = new Array<Sound>();
  }

  // Constructor with input
  public WordStructureComponent(characters: Array<Sound>) {
    this.characters = characters;
  }

  public permutate(component: WordStructureComponent) {
    const permCharacters = new Array<string>();

    this.characters.forEach(function(character) {
      for (let i = 0; i < component.characters.length; i++) {
        permCharacters.push(character.ipa_unicode
          + component.characters[i].ipa_unicode);
      }
    });

    return permCharacters;
  }

}
