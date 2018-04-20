import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'VowelFilter'
})
export class VowelFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
