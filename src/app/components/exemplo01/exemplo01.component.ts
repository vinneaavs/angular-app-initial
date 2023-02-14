import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo01',
  templateUrl: './exemplo01.component.html',
  styleUrls: ['./exemplo01.component.css']
})
export class Exemplo01Component implements OnInit {
  ngOnInit(): void {
    this.numberGenerate();
  }

  rnd!: number;
  numberGenerate(): void {
    this.rnd = Math.random();
  }
}
