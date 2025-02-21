import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormInputRadioComponent } from './ng-form-input-radio.component';

describe('NgFormInputRadioComponent', () => {
  let component: NgFormInputRadioComponent;
  let fixture: ComponentFixture<NgFormInputRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormInputRadioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
