import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgFormErrorsComponent } from './ng-form-errors.component';

describe('NgFormErrorsComponent', () => {
  let component: NgFormErrorsComponent;
  let fixture: ComponentFixture<NgFormErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormErrorsComponent ],
      imports: [ FormsModule ] // Adicione o FormsModule aqui
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
