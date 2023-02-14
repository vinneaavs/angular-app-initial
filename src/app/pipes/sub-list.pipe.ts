import { People } from './../classes/people';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sublist'
})
export class SubListPipe implements PipeTransform {

  transform(value: People[], input: string): People[] {
    return (!input ? value : value.filter(p => p.name.toLowerCase().includes(input.toLowerCase())));
  }
}
