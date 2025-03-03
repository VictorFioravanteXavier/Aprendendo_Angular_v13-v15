import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteUnitarioComponent } from './teste-unitario.component';

describe('TesteUnitarioComponent', () => {
  let component: TesteUnitarioComponent;
  let fixture: ComponentFixture<TesteUnitarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteUnitarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteUnitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testando a função soma()', () => {
    const fixture = TestBed.createComponent(TesteUnitarioComponent);
    const component = fixture.componentInstance;
    expect(component.soma(1, 1)).toEqual(2)
  });

  it('Testando a função soma() Dando Valor Errado', () => {
    const fixture = TestBed.createComponent(TesteUnitarioComponent);
    const component = fixture.componentInstance;
    expect(component.soma(1, 2)).not.toEqual(2)
  });
});
