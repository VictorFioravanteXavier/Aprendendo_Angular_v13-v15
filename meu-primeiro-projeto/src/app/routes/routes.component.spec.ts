import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing'; // Importe o RouterTestingModule
import { of } from 'rxjs'; // Importe o `of` do RxJS para criar observáveis
import { RoutesComponent } from './routes.component';

describe('RoutesComponent', () => {
  let component: RoutesComponent;
  let fixture: ComponentFixture<RoutesComponent>;

  // Mock do ActivatedRoute
  const mockActivatedRoute = {
    params: of({ id: '123', username: 'testuser' }), // Simula os parâmetros da rota
    queryParams: of({ search: 'angular' }) // Simula os parâmetros de consulta
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesComponent ],
      imports: [ RouterTestingModule ], // Importe o RouterTestingModule
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute } // Forneça o mock do ActivatedRoute
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log route params on initialization', () => {
    // Espiona o console.log para verificar se os parâmetros da rota são logados corretamente
    spyOn(console, 'log');
    component.ngOnInit();

    // Verifica se o console.log foi chamado com os parâmetros corretos
    expect(console.log).toHaveBeenCalledWith('123', 'testuser', { id: '123', username: 'testuser' });
  });

  it('should log query params on initialization', () => {
    // Espiona o console.log para verificar se os parâmetros de consulta são logados corretamente
    spyOn(console, 'log');
    component.ngOnInit();

    // Verifica se o console.log foi chamado com os parâmetros de consulta corretos
    expect(console.log).toHaveBeenCalledWith({ search: 'angular' });
  });
});