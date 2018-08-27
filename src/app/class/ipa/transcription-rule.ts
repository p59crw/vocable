import { Sound } from './../../class/index';

export class TranscriptionRule {

  soundToBeChanged: Sound;
  numberOfIndices: number;
  positionToChange: number;

  constructor() {
    this.soundToBeChanged = null;
    this.numberOfIndices = 0;
    this.positionToChange = 0;
  }

  public parse() {

  }

}
