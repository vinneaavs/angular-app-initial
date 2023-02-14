import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo04Component } from './exemplo04.component';

describe('Exemplo04Component', () => {
  let component: Exemplo04Component;
  let fixture: ComponentFixture<Exemplo04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo04Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
