import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivasEstruturaisComponent } from './componentes/diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasEstruturaisModule } from './componentes/diretivas-estruturais/diretivas-estruturais.module';
import { DiretivasAtributoComponent } from './componentes/diretivas-atributo/diretivas-atributo.component';
import { DiretivasAtributoModule } from './componentes/diretivas-atributo/diretivas-atributo.module';



@NgModule({
  declarations: [
    DiretivasEstruturaisComponent,
    DiretivasAtributoComponent
  ],
  imports: [
    CommonModule,
    DiretivasEstruturaisModule,
    DiretivasAtributoModule
  ],
  exports: [
    DiretivasEstruturaisComponent,
    DiretivasAtributoComponent
  ]
})
export class DiretivaModule { }
