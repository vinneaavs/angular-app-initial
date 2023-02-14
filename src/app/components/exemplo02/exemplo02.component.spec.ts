import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo02Component } from './exemplo02.component';

describe('Exemplo02Component', () => {
  let component: Exemplo02Component;
  let fixture: ComponentFixture<Exemplo02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
