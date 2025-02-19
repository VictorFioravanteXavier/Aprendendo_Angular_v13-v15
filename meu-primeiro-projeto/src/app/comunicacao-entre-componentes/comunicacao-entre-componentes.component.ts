import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunicacao-entre-componentes',
  templateUrl: './comunicacao-entre-componentes.component.html',
  styleUrls: ['./comunicacao-entre-componentes.component.scss']
})
export class ComunicacaoEntreComponentesComponent implements OnInit {

  public addValue: number = 0

  public add() {
    this.addValue++
  }

  public getDados: {nome: string, idade:number} | undefined 

  public setDados(event: {nome: string, idade:number}){
    this.getDados = event
  }

  constructor() { }

  ngOnInit(): void {
  }

}
