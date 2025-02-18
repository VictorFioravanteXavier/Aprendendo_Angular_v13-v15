import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent implements OnInit {

  public height: string = '20px';
  public backgroundColor: string = 'red'
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      if (this.height === "20px"){
        this.height = "40px"
        this.backgroundColor = 'blue'
      } else {
        this.height = "20px"
        this.backgroundColor = 'red'
      }
    }, 2000)
  }

}
