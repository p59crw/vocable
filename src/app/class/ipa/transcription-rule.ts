import { Sound } from './../../class/index';
import { ParserSymbols, SoundPosition } from './../../enum/index';

export class TranscriptionRule {

  inputRule: string;
  outputRule: string;
  soundToBeChanged: string;
  changePosition: string;
  changeToMake: string;

  constructor(str: string) {
    this.soundToBeChanged = null;
    this.inputRule = str.substring(0, str.indexOf(':'));
    this.outputRule = str.substring(str.indexOf(':') + 1);
  }

  public parse() {
    const start = this.inputRule.indexOf('<') + 1;
    const end = this.inputRule.indexOf('>');
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

}
