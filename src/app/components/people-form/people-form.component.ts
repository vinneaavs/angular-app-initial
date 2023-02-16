import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { People } from 'src/app/classes/people';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent {
  constructor(private router: Router){

  }
  people: People = new People();
  add(p: People): void{
    let msg: string = `Nome: ${p.name}\nIdade: ${p.age}`;
    window.alert(msg);
  }
  close(): void{
    this.router.navigate(['/home'])
  }
}
