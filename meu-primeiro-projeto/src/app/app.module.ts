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
import { DiretivaComponent } from './diretiva/diretiva.component';
import { DiretivaModule } from './diretiva/diretiva.module';
import { ModulesComponent } from './modules/modules.component';
import { SharedModule } from './modules/shared/shared.module';
import { ComunicacaoEntreComponentesComponent } from './comunicacao-entre-componentes/comunicacao-entre-componentes.component';
import { ComunicacaoEntreComponentesModule } from './comunicacao-entre-componentes/comunicacao-entre-componentes.module';
import { ServicoHttpObservableComponent } from './servico-http-observable/servico-http-observable.component';
import { ServicoHttpObservableModule } from './servico-http-observable/servico-http-observable.module';
import { FormsComponent } from './forms/forms.component';
import { FormsComponentModule } from './forms/forms.module';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsComponenteModule } from './reactive-forms/reactive-forms.module';
import { RoutesComponent } from './routes/routes.component';
import { RoutesModule } from './routes/routes.module';
import { TesteUnitarioComponent } from './teste-unitario/teste-unitario.component';
import { TesteUnitarioModule } from './teste-unitario/teste-unitario.module';
import { RoutesGuardsComponent } from './routes-guards/routes-guards.component';
import { RoutesGuardsModule } from './routes-guards/routes-guards.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CicloDeVidaComponentesComponent,
    DataBindingComponent,
    DiretivaComponent,
    ModulesComponent,
    ComunicacaoEntreComponentesComponent,
    ServicoHttpObservableComponent,
    FormsComponent,
    ReactiveFormsComponent,
    RoutesComponent,
    TesteUnitarioComponent,
    RoutesGuardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CicloDeVidaComponentesModule,
    DataBindingModule,
    FormsModule,
    DiretivaModule,
    SharedModule,
    ComunicacaoEntreComponentesModule,
    ServicoHttpObservableModule,
    FormsComponentModule,
    ReactiveFormsComponenteModule,
    RoutesModule,
    TesteUnitarioModule,
    RoutesGuardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
