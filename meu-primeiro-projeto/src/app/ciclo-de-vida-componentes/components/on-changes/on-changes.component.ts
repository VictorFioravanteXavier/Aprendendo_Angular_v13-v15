import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-on-changes',
  templateUrl: './on-changes.component.html',
  styleUrls: ['./on-changes.component.scss']
})
export class OnChangesComponent implements OnChanges {

  @Input() public title: string = 'Bem Vindo' 
  
  constructor() { }

  ngOnChanges(): void {
    /* Sempre que recebe um dado externo o OnChanges é invocado */
    /* Então se a variavel title que é um input for alterada o OnChanges é chamado */
    alert("Foi alterado com sucesso!")
  }


}
