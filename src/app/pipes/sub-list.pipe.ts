import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subList'
})
export class SubListPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
