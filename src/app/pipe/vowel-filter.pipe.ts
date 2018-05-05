import { Pipe, PipeTransform } from '@angular/core';
import { Vowel } from './../class/index';

@Pipe({
  name: 'VowelFilter'
})
export class VowelFilterPipe implements PipeTransform {

  transform(vowels: Vowel[], arg: string): any {
    if (!vowels || !arg) {
      return vowels;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return vowels.filter(vowel => vowel.height.indexOf(arg) !== -1);
  }

}
