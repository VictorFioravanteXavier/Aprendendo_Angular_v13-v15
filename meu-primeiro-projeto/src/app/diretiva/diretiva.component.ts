import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.scss']
})
export class DiretivaComponent implements OnInit {

  /* Elas manipulam o DOM mais facilmente por causa deo Angular */

  /* 
    Diretivas de Atributo (Que alteram aparencia ou comportameto de um elemento, componente ou outra diretiva):
      => ngClass -> adiciona e remove um conjuntode classes CSS.
      => ngStyle -> adiciona e remove um conjunto de estilos HTML.
      => ngModel -> adiciona a vinculção de dados bidirecional a um elemento de formulário HTML.
  */  

  /* 
    Diretivas Estruturais (Que alteram a estrutura do DOM, adicionando, removendo e manipulando elementos )
      => ngIf -> condicionalmete cria ou descarta vizualizações de modelo.
      => ngFor -> Repete um nó para cada item de uma lista.
      => ngSwitch -> Um conjunto de diretivas entre visões alternativas.
  */

  constructor() { }

  ngOnInit(): void {
  }

}
