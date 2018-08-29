import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Consonant } from './../class/index';

@Pipe({
  name: 'ConsonantFilter',
  pure: false
})

@Injectable()
export class ConsonantFilterPipe implements PipeTransform {

  transform(consonants: Consonant[], filter: string): Array<any> {
    if (!consonants || !filter) {
      return consonants;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return consonants.filter(item => item.manner === filter);
  }

}
