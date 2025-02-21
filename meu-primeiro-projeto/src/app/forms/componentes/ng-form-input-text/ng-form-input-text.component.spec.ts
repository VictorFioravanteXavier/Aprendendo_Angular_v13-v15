import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormInputTextComponent } from './ng-form-input-text.component';

describe('NgFormInputTextComponent', () => {
  let component: NgFormInputTextComponent;
  let fixture: ComponentFixture<NgFormInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormInputTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
