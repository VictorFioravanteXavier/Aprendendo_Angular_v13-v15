import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgClassComponent } from './componentes/ng-class/ng-class.component';
import { NgStyleComponent } from './componentes/ng-style/ng-style.component';
import { NgModelComponent } from './componentes/ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { NgTemplateComponent } from './componentes/ng-template/ng-template.component';
import { NgContentComponent } from './componentes/ng-content/ng-content.component';
import { PipesComponent } from './componentes/pipes/pipes.component';



@NgModule({
  declarations: [
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    NgTemplateComponent,
    NgContentComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    NgTemplateComponent,
    NgContentComponent,
    PipesComponent
  ]
})
export class DiretivasAtributoModule { }
