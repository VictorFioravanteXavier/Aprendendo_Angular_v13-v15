import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './shared/pages/home/home.component';
import { RoutesGuardsRoutingModule } from './routes-guards-routing.module';
import { AccountComponent } from './shared/pages/account/account.component';



@NgModule({
  declarations: [
    HomeComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    RoutesGuardsRoutingModule,
  ]
})
export class RoutesGuardsModule { }
