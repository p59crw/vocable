import { WordStructure } from './word-structure';

export class WordStructureComparer {

  public constructor() { }

  public equals(x: WordStructure, y: WordStructure): boolean {
    return x.toString() === y.toString();
  }

  // TODO: Update this method to get actual HashCode number of obj.

  public getHashCode(obj: WordStructure): number {
    let hash = 17;
    hash = hash * 23; // + this.getHashCode(obj);
    return hash;
  }
}
