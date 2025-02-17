import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  public position: {x: number, y: number} = {x: 0, y: 0}

  public alertaInfo(valor: MouseEvent) {
    console.log(valor)
  }

  constructor() { }

  ngOnInit(): void {
  }


  public mouseMoveTeste (valor: MouseEvent) {
    this.position.x = valor.offsetX
    this.position.y = valor.offsetY
  }
}
