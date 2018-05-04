import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Consonant } from './../class/index';

@Pipe({
  name: 'ConsonantFilter'
})
@Injectable()
export class ConsonantFilterPipe implements PipeTransform {

  transform(consonants: Consonant[], arg: string): any {
    if (!consonants || !arg) {
      return consonants;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return consonants.filter(consonant => consonant.manner.indexOf(arg) !== -1);
  }

}
