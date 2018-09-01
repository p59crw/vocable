import { Sound } from './sound';
import { PartOfSpeech } from './../../enum/part-of-speech.enum';

export class Word {

  public sounds: Array<Sound>;
  public partOfSpeech: PartOfSpeech;
  public definition: string;
  public isSelected: boolean;
  public displayForm: string;

  public constructor() {
    this.sounds = new Array<Sound>();
    this.partOfSpeech = PartOfSpeech.ADVERB;
    this.isSelected = false;
  }

  public toString() {
    let displayForm = '';
    this.sounds.forEach(function(sound) {
      displayForm = displayForm.concat(sound.ipa_unicode);
    });

    this.displayForm = displayForm;

    return { 'gloss': '/' + this.displayForm + '/', 'partOfSpeech': this.partOfSpeech, 'definition': '', 'isSelected': this.isSelected };
  }
}
