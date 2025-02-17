import { Component, DoCheck, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-do-check',
  templateUrl: './do-check.component.html',
  styleUrls: ['./do-check.component.scss']
})
export class DoCheckComponent implements  DoCheck {

  public valor: number = 1;
  public adicionar(): number {
    return this.valor++
  }

  constructor() { }

  ngDoCheck(): void {
    /* É chamado sempre que as poriedades de entradas de um componente são verificada */
    /* Então se adicionamos 1 ao valor ele é chamado */
    console.log("DoCheck")
  }

  ngAfterContentInit(): void {
    /* É chamado depois que o conteúdo externo é inserido no componente (por exemplo, vindo do ng-content). */
    /* Então ele é chamado quando a variavel valor é adicionada no componente mas somente quando é iniciado */
    console.log("AfterContentInit")
  }

  ngAfterContentChecked(): void {
    /* É invocado após a verificação do conteúdo externo. */
    /* Então ele é chamado quando a variavel valor é alterada ou adicionada no componente, todas as vezes que sofre alguma alteração */
    console.log("AfterContentChecked")
  }

  ngAfterViewInit(): void {
    /* É chamado logo após o conteúdo do próprio componente e de seus filhos ser inicializado. */
    /* Então quando o componente é todo redenrizado ele é chamado mas somente no inicio */
    console.log("AfterViewInit")
  }

  ngAfterViewChecked(): void {
    /* Échamado cada vez que o conteúdo do componente é verificado pelo mecanismo de detecção de alterações do Angular. */
    /* Então é chamado quando alteramos o conteúdo do componente no caso a variavel valor. */
    console.log("AfterViewChecked")
  }

}
