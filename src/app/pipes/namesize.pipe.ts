import { People } from './../classes/people';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesize'
})
export class NamesizePipe implements PipeTransform {

  transform(value: string): string | number {
    return value + " " + "(" + value.replace(" ", "").length + ")";
  }

}
