import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-unitario',
  templateUrl: './teste-unitario.component.html',
  styleUrls: ['./teste-unitario.component.scss']
})
export class TesteUnitarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public soma(v1: number, v2: number){
    return v1 + v2
  }
}
