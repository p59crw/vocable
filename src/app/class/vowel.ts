import { Height, Backness, Unicode } from './../enum/index';
import { Sound } from './sound';

export class Vowel extends Sound {
  height: Height;
  backness: Backness;
  rounded: boolean;
  nasalized: boolean;
  rhotic: boolean;
  isLong: boolean;

  constructor(height: Height, backness: Backness, rounded: boolean,
    ipa_unicode: string) {
    super(ipa_unicode);
    this.height = height;
    this.backness = backness;
    this.rounded = rounded;
    this.nasalized = false;
    this.rhotic = false;
    this.isLong = false;
  }

}
