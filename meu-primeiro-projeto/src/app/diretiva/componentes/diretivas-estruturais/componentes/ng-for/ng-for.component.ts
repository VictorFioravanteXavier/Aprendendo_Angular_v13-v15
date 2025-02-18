import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {

  public list: Array<{nome: string, idade: number}> = [
    {nome: "AAAA", idade: 20},
    {nome: "BBBB", idade: 30},
    {nome: "CCCC", idade: 40},
    {nome: "DDDD", idade: 50}
  ]

  public onClickAddList () {
    this.list.push({nome: "EEEE", idade: 60})
  }

  public onClickEventList(event: number) {
    this.list.splice(event, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
