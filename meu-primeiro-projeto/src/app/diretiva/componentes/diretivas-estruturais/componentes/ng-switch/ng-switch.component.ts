import { Component, OnInit } from '@angular/core';
import { SrvRecord } from 'dns';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  public nome: string = "aaaa"

  constructor() { }

  ngOnInit(): void {
  }

}
