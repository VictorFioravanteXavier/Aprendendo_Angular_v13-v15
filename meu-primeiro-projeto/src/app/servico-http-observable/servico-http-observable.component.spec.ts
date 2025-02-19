import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicoHttpObservableComponent } from './servico-http-observable.component';

describe('ServicoHttpObservableComponent', () => {
  let component: ServicoHttpObservableComponent;
  let fixture: ComponentFixture<ServicoHttpObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicoHttpObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicoHttpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
