import { Injectable } from '@angular/core';
import { Consonant, Vowel } from './../class/index';
import { Height, Backness, Place, Manner, ConsonantUnicode, VowelUnicode } from './../enum/index';

@Injectable()
export class IpaService {
  consonants: Array<Consonant> = [];
  vowels: Array<Vowel> = [];

  constructor() { }

  initIPA() {
    /* Init consonant enums */
    const placeTypes = Object.keys(Place);
    const mannerTypes = Object.keys(Manner);
    const consonantUnicodeTypes = Object.keys(ConsonantUnicode);

    /* Init vowel enums */
    const heightTypes = Object.keys(Height);
    const backnessTypes = Object.keys(Backness);
    const vowelUnicodeTypes = Object.keys(VowelUnicode);

    // Initialize consonant groupings
    for (let j = 0; j < mannerTypes.length; j++) {
      for (let i = 0; i < placeTypes.length; i++) {
        this.consonants.push(new Consonant(placeTypes[i], mannerTypes[j], false, null));
        this.consonants.push(new Consonant(placeTypes[i], mannerTypes[j], true, null));
      }
    }

    // Add ConsonantUnicode value to each consonant
    for (let k = 0; k < consonantUnicodeTypes.length; k++) {
      if (Object.getOwnPropertyDescriptor(ConsonantUnicode, consonantUnicodeTypes[k]).value === 'null') {
        // Leave ConsonantUnicode NULL so that chart spot is greyed in
      } else {
        this.consonants[k].ipa_unicode = Object.getOwnPropertyDescriptor(ConsonantUnicode, consonantUnicodeTypes[k]).value;
      }
    }

    // Initialize consonant groupings
    for (let j = 0; j < heightTypes.length; j++) {
      for (let i = 0; i < backnessTypes.length; i++) {
        this.vowels.push(new Vowel(heightTypes[j], backnessTypes[i], false, null));
        this.vowels.push(new Vowel(heightTypes[j], backnessTypes[i], true, null));
      }
    }

    // Add ConsonantUnicode value to each consonant
    for (let k = 0; k < vowelUnicodeTypes.length; k++) {
      this.vowels[k].ipa_unicode = Object.getOwnPropertyDescriptor(VowelUnicode, vowelUnicodeTypes[k]).value;
    }
  }
}
