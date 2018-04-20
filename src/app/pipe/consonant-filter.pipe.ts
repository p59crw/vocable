import { Pipe, PipeTransform } from '@angular/core';
import { Consonant } from './../class/index';

@Pipe({
  name: 'ConsonantFilter'
})
export class ConsonantFilterPipe implements PipeTransform {

  transform(consonants: Consonant[], args: string): any {
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return consonants.filter(consonant => consonant.manner.indexOf(args[0]) !== -1);
  }

}
