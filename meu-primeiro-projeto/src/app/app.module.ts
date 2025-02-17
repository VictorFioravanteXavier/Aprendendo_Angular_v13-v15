import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CicloDeVidaComponentesComponent } from './ciclo-de-vida-componentes/ciclo-de-vida-componentes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CicloDeVidaComponentesModule } from './ciclo-de-vida-componentes/ciclo-de-vida-componentes.module';
import { DataBindingModule } from './data-binding/data-binding.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CicloDeVidaComponentesComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CicloDeVidaComponentesModule,
    DataBindingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
