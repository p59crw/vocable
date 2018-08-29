import { Height, Backness, VowelUnicode } from './../../enum/index';
import { Sound } from './sound';

export class Vowel extends Sound {
  height: string;
  backness: string;
  rounded: boolean;
  nasalized: boolean;
  rhotic: boolean;
  isLong: boolean;

  constructor(height: string, backness: string, rounded: boolean, ipa_unicode: string) {
    super(ipa_unicode);
    this.height = height;
    this.backness = backness;
    this.rounded = rounded;
    this.nasalized = false;
    this.rhotic = false;
    this.isLong = false;
  }

}
