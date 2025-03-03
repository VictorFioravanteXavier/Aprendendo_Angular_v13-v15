import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FoodAddComponent } from './food-add.component';
import { FoodListService } from '../../services/food-list.service';

describe('FoodAddComponent', () => {
  let component: FoodAddComponent;
  let service: FoodListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodAddComponent],
      imports: [HttpClientTestingModule], // Adicione esta linha
      providers: [FoodListService], // Forneça o serviço FoodListService
    });

    component = TestBed.createComponent(FoodAddComponent).componentInstance;
    service = TestBed.inject(FoodListService); // Injete o serviço
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado
  });
});