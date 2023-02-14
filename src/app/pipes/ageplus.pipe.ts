import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageplus'
})
export class AgeplusPipe implements PipeTransform {

  transform(value: number): string | number {
    return value <= 18 ? value + ' (-18)' : value;
  }

}
