import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
  styleUrls: ['./on-init.component.scss']
})
export class OnInitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /* Funciona assim que o componente é iniciado */
    setTimeout(() => {
      console.log(1)
    }, 5000)
  }


}
