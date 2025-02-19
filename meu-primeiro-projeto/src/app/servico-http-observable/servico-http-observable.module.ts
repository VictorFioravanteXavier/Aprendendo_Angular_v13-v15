import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { FoodListComponent } from './componentes/food-list/food-list.component';
import { FoodAddComponent } from './componentes/food-add/food-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FoodListComponent,
    FoodAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FoodListComponent,
    FoodAddComponent
  ]
})
export class ServicoHttpObservableModule { }
