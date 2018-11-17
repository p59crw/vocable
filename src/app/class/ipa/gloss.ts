export class Gloss {
  primary_stress: number;
  secondary_stress: number;
  phonemes: string[];
  syllables: string[];
  transcription: string;

  constructor(primary_stress: number, secondary_stress: number,
    phonemes: string[], syllables: string[]) {
    this.primary_stress = this.primary_stress;
    this.secondary_stress = secondary_stress;
    this.phonemes = phonemes;
    this.syllables = syllables;
  }

  public toString = (): string => {
    return `/` + this.phonemes + `/`;
  }
}
