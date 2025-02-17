import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicloDeVidaComponentesComponent } from './ciclo-de-vida-componentes.component';

describe('CicloDeVidaComponentesComponent', () => {
  let component: CicloDeVidaComponentesComponent;
  let fixture: ComponentFixture<CicloDeVidaComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CicloDeVidaComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CicloDeVidaComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
