import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public nome: string = ""

  public list: Array<{nome: string}> = [
    {nome: "aaaa"},
    {nome: "BBBB"},
    {nome: "cccc  "},
    {nome: "DDDD"},
  ]

  public date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  public salvar () {
    this.list.push({nome: this.nome})
    this.nome = ''
  }
}
