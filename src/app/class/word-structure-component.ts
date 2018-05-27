export class WordStructureComponent {
  isOptional: boolean;
  characters: Array<string>;
  symbol: string;

  // Default Constructor
  public constructor() {
    this.characters = new Array<string>();
  }

  // Constructor with input
  public WordStructureComponent(characters: Array<string>) {
    this.characters = characters;
  }

  public permutate(component: WordStructureComponent) {
    const permCharacters = new Array<string>();

    this.characters.forEach(function(character) {
      for (let i = 0; i < component.characters.length; i++) {
        permCharacters.push(character + component.characters[i]);
      }
    });

    return permCharacters;
  }

}
