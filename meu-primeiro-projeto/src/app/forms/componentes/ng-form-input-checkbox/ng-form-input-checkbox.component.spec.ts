import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgFormInputCheckboxComponent } from './ng-form-input-checkbox.component';

describe('NgFormInputCheckboxComponent', () => {
  let component: NgFormInputCheckboxComponent;
  let fixture: ComponentFixture<NgFormInputCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormInputCheckboxComponent ],
      imports: [ FormsModule ] // Adicione o FormsModule aqui
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
