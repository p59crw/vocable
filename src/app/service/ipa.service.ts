import { Injectable } from '@angular/core';
import { Consonant, Vowel } from './../class/index';
import { Height, Backness, Place, Manner, Unicode } from './../enum/index';

@Injectable()
export class IpaService {
  consonants: Consonant[] = [];
  vowels: Vowel[] = [];

  constructor() { }

  initIPA() {
    /* Init consonants */
    const placeTypes = Object.keys(Place);
    const mannerTypes = Object.keys(Manner);
    const unicodeTypes = Object.keys(Unicode);

    // Initialize consonant groupings
    for (let j = 0; j < mannerTypes.length; j++) {
      for (let i = 0; i < placeTypes.length; i++) {
        this.consonants.push(new Consonant(placeTypes[i], mannerTypes[j], false, null));
        this.consonants.push(new Consonant(placeTypes[i], mannerTypes[j], true, null));
      }
    }

    // Add Unicode value to each consonant
    for (let k = 0; k < unicodeTypes.length; k++) {
      if (Object.getOwnPropertyDescriptor(Unicode, unicodeTypes[k]).value === 'null') {
        // Leave Unicode NULL so that chart spot is greyed in
      } else {
        this.consonants[k].ipa_unicode = Object.getOwnPropertyDescriptor(Unicode, unicodeTypes[k]).value;
      }
    }
  }
}
