import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/classes/people';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-exemplo02',
  templateUrl: './exemplo02.component.html',
  styleUrls: ['./exemplo02.component.css']
})
export class Exemplo02Component implements OnInit {
  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peoples = this.peopleService.listPeople();

  }

// exemplo 2
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

}
