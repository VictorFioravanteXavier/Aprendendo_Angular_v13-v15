import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFormInputTextComponent } from './componentes/ng-form-input-text/ng-form-input-text.component';
import { FormsModule } from '@angular/forms';
import { NgFormInputRadioComponent } from './componentes/ng-form-input-radio/ng-form-input-radio.component';
import { NgFormInputCheckboxComponent } from './componentes/ng-form-input-checkbox/ng-form-input-checkbox.component';
import { NgFormSelectedComponent } from './componentes/ng-form-selected/ng-form-selected.component';
import { NgFormErrorsComponent } from './componentes/ng-form-errors/ng-form-errors.component';
import { NgSubmitSubmitFormComponent } from './componentes/ng-submit-submit-form/ng-submit-submit-form.component';



@NgModule({
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
  ],
  exports: [
    NgFormInputTextComponent,
    NgFormInputRadioComponent,
    NgFormInputCheckboxComponent,
    NgFormSelectedComponent,
    NgFormErrorsComponent,
    NgSubmitSubmitFormComponent
  ]
})
export class FormsComponentModule { }
