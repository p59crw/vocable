import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Consonant } from './../class/index';

@Pipe({
  name: 'ConsonantFilter'
})

@Injectable()
export class ConsonantFilterPipe implements PipeTransform {

  transform(consonants: Consonant[], arg: string): any[] {
    if (!consonants) {
      return [];
    }
    if (arg) {
      return consonants.filter(consonant => {
        return consonant.manner.toLowerCase().indexOf(arg.toLowerCase()) > -1;
      });
    } else {
      return consonants;
    }
  }

}
