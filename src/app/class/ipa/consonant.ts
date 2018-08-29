import { Manner, Onset, Place, ConsonantUnicode } from './../../enum/index';
import { Sound } from './sound';

export class Consonant extends Sound {
  place: string;
  manner: string;
  voicing: boolean;
  onset: Onset;

  constructor(place: string, manner: string, voicing: boolean, ipa_unicode: string) {
    super(ipa_unicode);
    this.place = place;
    this.manner = manner;
    this.voicing = voicing;
    this.onset = 0;
  }

}
