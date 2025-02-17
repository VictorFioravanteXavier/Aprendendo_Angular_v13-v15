import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  public checkedDisabled: boolean = false
  public imgSrc: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR43eyR7fQkL76C422v6yajnaxdBPDSFOK8-Q&s"
  public titleImg: string = "Girasol"
  constructor() { }

  ngOnInit(): void {
  }

}
