import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!-- <app-ciclo-de-vida-componentes></app-ciclo-de-vida-componentes> -->
  <!-- <app-data-binding></app-data-binding> -->
  <app-diretiva></app-diretiva>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {  }
  
  
}
