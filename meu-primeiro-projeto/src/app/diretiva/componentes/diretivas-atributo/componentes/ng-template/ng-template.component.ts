import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  public list: Array<{nome: string}> = [
    {nome: "AAAA"},
    {nome: "BBBB"},
    {nome: "CCCC"},
    {nome: "DDDD"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
