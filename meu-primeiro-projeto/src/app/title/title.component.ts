import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  public title: string = "Bem Vindo!"

  constructor() { }

  ngOnInit(): void {  }

}
