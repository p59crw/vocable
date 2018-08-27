import { Sound } from './sound';

export class Word {

  public sounds: Array<Sound>;

  public constructor() {
    this.sounds = new Array<Sound>();
  }

  public toString() {
    let word = '';
    this.sounds.forEach(function(sound) {
      word = word.concat(sound.ipa_unicode);
    });

    return '/' + word + '/';
  }
}
