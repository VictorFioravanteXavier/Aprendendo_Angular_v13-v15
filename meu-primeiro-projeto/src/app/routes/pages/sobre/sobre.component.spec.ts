import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs'; // Importe o `of` do RxJS para simular observáveis
import { SobreComponent } from './sobre.component';

describe('SobreComponent', () => {
  let component: SobreComponent;
  let fixture: ComponentFixture<SobreComponent>;

  // Mock do ActivatedRoute
  const mockActivatedRoute = {
    params: of({ id: '123', username: 'testuser' }), // Simula os parâmetros da rota
    queryParams: of({ search: 'angular' }) // Simula os parâmetros de consulta
  };

  // Mock do Router
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'), // Espiona o método `navigate`
    navigateByUrl: jasmine.createSpy('navigateByUrl') // Espiona o método `navigateByUrl`
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }, // Fornece o mock do ActivatedRoute
        { provide: Router, useValue: mockRouter } // Fornece o mock do Router
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreComponent);
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