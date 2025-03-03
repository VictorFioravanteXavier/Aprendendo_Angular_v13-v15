import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingComponent } from './shared/banking/banking.component';
import { ListComponent } from './shared/investiments/components/list/list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    BankingComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    BankingComponent
  ]
})
export class TesteUnitarioModule { }
