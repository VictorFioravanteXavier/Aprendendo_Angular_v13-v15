import { Component, OnInit } from '@angular/core';

// Model
import { Investiments } from '../../model/investiments';

// Service
import { ListInvestimentsService } from '../../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [  ]

  constructor(private listInvestiments: ListInvestimentsService) { }

  ngOnInit(): void {
    this.listInvestiments.list().subscribe(
      res => this.investiments = res
    )
  }

}
