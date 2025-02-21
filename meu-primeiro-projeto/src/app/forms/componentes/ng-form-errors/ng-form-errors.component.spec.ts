import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormErrorsComponent } from './ng-form-errors.component';

describe('NgFormErrorsComponent', () => {
  let component: NgFormErrorsComponent;
  let fixture: ComponentFixture<NgFormErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormErrorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
