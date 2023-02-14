import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemplo03Component } from './exemplo03.component';

describe('Exemplo03Component', () => {
  let component: Exemplo03Component;
  let fixture: ComponentFixture<Exemplo03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exemplo03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exemplo03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
