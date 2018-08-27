import { Sound } from './sound';
import { Word } from './word';

export class WordStructureComponent {
  isOptional: boolean;
  words: Array<Word>;
  symbol: string;

  // Default Constructor
  public constructor() {
    this.words = new Array<Word>();
  }

  // Constructor with input
  public WordStructureComponent(characters: Array<Word>) {
    this.words = characters;
  }

  public permutate(component: WordStructureComponent): Array<Word> {
    const permWords = new Array<Word>();

    this.words.forEach(function(word) {
      for (let i = 0; i < component.words.length; i++) {
        const newWord = new Word();
        newWord.sounds = newWord.sounds.concat(word.sounds);
        newWord.sounds = newWord.sounds.concat(component.words[i].sounds);
        permWords.push(newWord);
      }
    });

    return permWords;
  }

}
