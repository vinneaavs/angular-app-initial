import { People } from './../classes/people';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  public listPeople() : People[]{
    return [
      { name: 'Stefam', age: 32 },
      { name: 'Rick', age: 32 },
      { name: 'Elena', age: 12 },
      { name: 'Daemon', age: 34 }
    ];
  }

}
