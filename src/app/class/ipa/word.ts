import { Sound } from './sound';

export class Word {

  public sounds: Array<Sound>;

  public constructor() {
    this.sounds = new Array<Sound>(); 
  }
}
