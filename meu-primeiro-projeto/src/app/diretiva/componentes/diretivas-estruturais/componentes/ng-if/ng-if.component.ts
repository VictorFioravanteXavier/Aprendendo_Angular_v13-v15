import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {

  public condition: boolean = true

  public conditionClick: boolean = true

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.condition = !this.condition
    }, 2000)
  }

  public onClick() {
    this.conditionClick = !this.conditionClick
  }
  

}
