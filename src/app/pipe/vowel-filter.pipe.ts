import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Vowel } from './../class/index';

@Pipe({
  name: 'VowelFilter',
  pure: false
})

@Injectable()
export class VowelFilterPipe implements PipeTransform {

  transform(vowels: Vowel[], filter: string): Array<any> {
    if (!vowels || !filter) {
      return vowels;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return vowels.filter(item => item.height === filter);
  }

}
