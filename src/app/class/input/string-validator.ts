import { Regex } from './../../enum/regex.enum';

export class StringValidator {

  constructor() { }

  validate(regex: Regex, str: string): boolean {
    const exp = new RegExp(regex, 'g');
    return exp.test(str);
  }

}
