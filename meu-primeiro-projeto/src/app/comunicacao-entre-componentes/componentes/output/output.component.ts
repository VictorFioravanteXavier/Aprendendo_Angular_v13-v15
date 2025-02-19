import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter() 

  public list: Array<{nome: string, idade:number}> = [
    {nome: "AAAA", idade: 30},
    {nome: "BBBB", idade: 40},
    {nome: "CCCC", idade: 50},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event])
  }

}
