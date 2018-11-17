import { Sound } from './sound';
import { PartOfSpeech } from './../../enum/part-of-speech.enum';
import { WordStructure } from './word-structure';

export class Word {

  public sounds: Array<Sound>;
  public partOfSpeech: PartOfSpeech;
  public definition: string;
  public primary_stress: number;
  public secondary_stress: number;
  public syllables: Array<WordStructure>;
  public isSelected: boolean;
  public glossOutput: string;
  public transcriptionOutput: string;

  public constructor() {
    this.sounds = new Array<Sound>();
    this.partOfSpeech = PartOfSpeech.ADVERB;
    this.isSelected = false;
  }

  public toString() {
    let glossOutput = '';
    this.sounds.forEach(function(sound) {
      glossOutput = glossOutput.concat(sound.ipa_unicode);
    });

    this.glossOutput = glossOutput;

    return { 'gloss': '/' + this.glossOutput + '/',
    'partOfSpeech': this.partOfSpeech, 'definition': '', 'isSelected': this.isSelected };
  }
}
