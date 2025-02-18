import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent implements OnInit {

  public nome: string = ""
  public list: Array<{nome: string}> = []

  constructor() { }

  ngOnInit(): void {
  }


  public salvar () {
    this.list.push({nome: this.nome})
    this.nome = ''
  }
}
