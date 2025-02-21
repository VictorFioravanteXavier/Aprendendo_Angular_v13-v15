import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsTesteComponent } from './componentes/reactive-forms-teste/reactive-forms-teste.component';



@NgModule({
  declarations: [
    ReactiveFormsTesteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsTesteComponent
  ]
})
export class ReactiveFormsComponenteModule { }
