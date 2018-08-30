import { Sound } from './sound';
import { PartOfSpeech } from './../../enum/part-of-speech.enum';

export class Word {

  public sounds: Array<Sound>;
  public partOfSpeech: PartOfSpeech;
  public definition: string;
  public isSelected: boolean;

  public constructor() {
    this.sounds = new Array<Sound>();
    this.partOfSpeech = PartOfSpeech.ADVERB;
    this.isSelected = false;
  }

  public toString() {
    let word = '';
    this.sounds.forEach(function(sound) {
      word = word.concat(sound.ipa_unicode);
    });

    return { 'gloss': '/' + word + '/', 'partOfSpeech': this.partOfSpeech, 'definition': '', 'isSelected': this.isSelected };
  }
}
