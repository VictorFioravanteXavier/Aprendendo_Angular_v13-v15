import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  public nome: string = "Dener"
  public idade: number = 29
  public maisUm: number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
