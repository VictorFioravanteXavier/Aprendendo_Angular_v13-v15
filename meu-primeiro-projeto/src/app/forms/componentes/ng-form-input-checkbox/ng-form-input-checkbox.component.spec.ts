import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormInputCheckboxComponent } from './ng-form-input-checkbox.component';

describe('NgFormInputCheckboxComponent', () => {
  let component: NgFormInputCheckboxComponent;
  let fixture: ComponentFixture<NgFormInputCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormInputCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
