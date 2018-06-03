export class Sound {
  ipa_unicode: string;
  isSelected: boolean;

  constructor(ipa_unicode: string) {
    this.ipa_unicode = ipa_unicode;
    this.isSelected = false;
  }
}
