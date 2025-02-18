import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './componentes/ng-if/ng-if.component';
import { NgSwitchComponent } from './componentes/ng-switch/ng-switch.component';
import { NgForComponent } from './componentes/ng-for/ng-for.component';



@NgModule({
  declarations: [
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgForComponent,
    NgIfComponent,
    NgSwitchComponent,
  ]
})
export class DiretivasEstruturaisModule { }
