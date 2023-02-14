import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/classes/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-exemplo03',
  templateUrl: './exemplo03.component.html',
  styleUrls: ['./exemplo03.component.css']
})
export class Exemplo03Component implements OnInit {
  public get peopleService(): PeopleService {
    return this._peopleService;
  }
  public set peopleService(value: PeopleService) {
    this._peopleService = value;
  }
  constructor(private _peopleService: PeopleService){}
  ngOnInit(): void {
    this.peoples = this.peopleService.listPeople();
  }
  peoples: People[] = [];

  listPeople(): void {
    this.peoples = [
      { name: 'Stefam', age: 32 },
      { name: 'Rick', age: 32 },
      { name: 'Elena', age: 12 },
      { name: 'Daemon', age: 34 }
    ];
  };
  namePeople!: string;
  showName(name: string): void {
    this.namePeople = name
  };

  filterList(input: string): void {
    this.listPeople();
    this.peoples = this.peoples.filter(p => p.name.toLowerCase().includes(input.toLowerCase()));
  }
}
