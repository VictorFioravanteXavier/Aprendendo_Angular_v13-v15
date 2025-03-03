import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-ciclo-de-vida-componentes></app-ciclo-de-vida-componentes> -->
  <!-- <app-data-binding></app-data-binding> -->
  <!-- <app-diretiva></app-diretiva> -->
  <!-- <app-modules></app-modules> -->
  <!-- <app-comunicacao-entre-componentes></app-comunicacao-entre-componentes> -->
  <!-- <app-servico-http-observable></app-servico-http-observable> -->
  <!-- <app-forms></app-forms> -->
  <!-- <app-reactive-forms></app-reactive-forms> -->
  <!-- <app-routes></app-routes> -->
  <app-teste-unitario></app-teste-unitario>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {  }
  
  
}
