import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './componentes/input/input.component';
import { OutputComponent } from './componentes/output/output.component';



@NgModule({
  declarations: [
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    OutputComponent
  ]
})
export class ComunicacaoEntreComponentesModule { }
