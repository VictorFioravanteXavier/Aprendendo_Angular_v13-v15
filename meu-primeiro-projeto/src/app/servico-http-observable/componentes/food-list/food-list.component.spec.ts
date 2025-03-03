import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FoodListComponent } from './food-list.component';
import { FoodListService } from '../../services/food-list.service';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let service: FoodListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodListComponent],
      imports: [HttpClientTestingModule], // Adicione esta linha
      providers: [FoodListService], // Forneça o serviço FoodListService
    });

    component = TestBed.createComponent(FoodListComponent).componentInstance;
    service = TestBed.inject(FoodListService); // Injete o serviço
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado
  });
});