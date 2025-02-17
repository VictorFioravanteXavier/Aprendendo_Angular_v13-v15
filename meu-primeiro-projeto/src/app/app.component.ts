import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-ciclo-de-vida-componentes></app-ciclo-de-vida-componentes>
  <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {  }
  
  
}
