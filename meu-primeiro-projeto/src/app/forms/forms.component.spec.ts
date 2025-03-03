import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormsComponent } from './forms.component';
import { NgFormErrorsComponent } from './componentes/ng-form-errors/ng-form-errors.component';
import { NgFormInputCheckboxComponent } from './componentes/ng-form-input-checkbox/ng-form-input-checkbox.component';
import { NgFormInputRadioComponent } from './componentes/ng-form-input-radio/ng-form-input-radio.component';
import { NgFormInputTextComponent } from './componentes/ng-form-input-text/ng-form-input-text.component';
import { NgFormSelectedComponent } from './componentes/ng-form-selected/ng-form-selected.component';
import { NgSubmitSubmitFormComponent } from './componentes/ng-submit-submit-form/ng-submit-submit-form.component';

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NgFormInputTextComponent,
        NgFormInputRadioComponent,
        NgFormInputCheckboxComponent,
        NgFormSelectedComponent,
        NgFormErrorsComponent,
        NgSubmitSubmitFormComponent
      ],
      imports: [
        CommonModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
