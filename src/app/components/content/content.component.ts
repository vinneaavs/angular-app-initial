import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/classes/people';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  //exemplo 3
  constructor(private peopleService: PeopleService){}

  // exemplo 1
  ngOnInit(): void {
    this.numberGenerate();
    this.peoples = this.peopleService.listPeople();
    throw new Error('Method not implemented.');
  }
  rnd!: number;
  numberGenerate(): void {
    this.rnd = Math.random();
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

  filterList(input: string): void {
    this.listPeople();
    this.peoples = this.peoples.filter(p => p.name.toLowerCase().includes(input.toLowerCase()));
  }
}
