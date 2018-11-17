import { Sound } from './../../class/index';
import { ParserSymbols, Regex, SoundPosition } from './../../enum/index';
import { Word } from './../../class/index';

export class TranscriptionRule {

  inputRule: string;
  outputRule: string;
  soundToBeChanged: string;
  changePosition: string;
  changeToMake: string;
  wordBoundary_start: boolean;
  wordBoundary_end: boolean;
  numberOfChars: number;

  constructor(str: string) {
    this.soundToBeChanged = null;
    this.inputRule = str.substring(0, str.indexOf(ParserSymbols.RULE_BOUNDARY));
    this.outputRule = str.substring(str.indexOf(ParserSymbols.RULE_BOUNDARY) + 1);
  }

  public parse() {
    const start = this.inputRule.indexOf(ParserSymbols.CHANGE_START) + 1;
    const end = this.inputRule.indexOf(ParserSymbols.CHANGE_END);
    this.soundToBeChanged = this.inputRule.substring(start, end);

    const soundContext = this.inputRule
      .replace(ParserSymbols.CHANGE_START, '')
      .replace(ParserSymbols.CHANGE_END, '')
      .replace(ParserSymbols.OPTIONAL_START, '')
      .replace(ParserSymbols.OPTIONAL_END, '')
      .split('');
    for (let i = 0; i < soundContext.length; i++) {
      if (soundContext.indexOf(this.soundToBeChanged) === 0) {
        this.changePosition = SoundPosition.INITIAL;
      } else if (soundContext.indexOf(this.soundToBeChanged) === soundContext.length - 1) {
        this.changePosition = SoundPosition.FINAL;
      } else {
        this.changePosition = SoundPosition.MEDIAL;
      }
    }
  }

  public analyzeWord(word: Word) {
    if (this.wordBoundary_start && this.wordBoundary_end) {
      for (let i = 0; i < word.glossOutput.length; i++) {
        this.numberOfChars++;
      }
    }
  }

  public swapSound(sounds: Array<Word>) {

  }

}
