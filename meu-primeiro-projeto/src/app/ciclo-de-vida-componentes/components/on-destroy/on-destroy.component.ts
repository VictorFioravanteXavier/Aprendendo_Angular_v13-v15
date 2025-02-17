import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.scss']
})
export class OnDestroyComponent implements OnInit, OnDestroy {

  public destruir: boolean = true

  public destruirComponent(){
    this.destruir = false
  }

  constructor() { }
  ngOnDestroy(): void {
    console.log("Deu bom ele foi destruido!")
  }

  ngOnInit(): void {
  }

}
