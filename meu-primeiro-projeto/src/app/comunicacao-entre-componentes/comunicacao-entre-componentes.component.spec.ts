import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunicacaoEntreComponentesComponent } from './comunicacao-entre-componentes.component';

describe('ComunicacaoEntreComponentesComponent', () => {
  let component: ComunicacaoEntreComponentesComponent;
  let fixture: ComponentFixture<ComunicacaoEntreComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComunicacaoEntreComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicacaoEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
