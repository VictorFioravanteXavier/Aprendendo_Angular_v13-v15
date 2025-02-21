import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-form-selected',
  templateUrl: './ng-form-selected.component.html',
  styleUrls: ['./ng-form-selected.component.scss']
})
export class NgFormSelectedComponent implements OnInit {

  public list: Array<{comida: string, valor: number}> = [
    {comida: "X-Salada", valor: 30},
    {comida: "X-Bacon", valor: 40},
    {comida: "Coxinha", valor: 5}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
