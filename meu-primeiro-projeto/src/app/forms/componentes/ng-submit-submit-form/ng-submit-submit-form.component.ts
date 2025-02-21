import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-submit-submit-form',
  templateUrl: './ng-submit-submit-form.component.html',
  styleUrls: ['./ng-submit-submit-form.component.scss']
})
export class NgSubmitSubmitFormComponent implements OnInit {

  public submitForm(form: NgForm){
    if (form.valid){
      console.log(form.value)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
