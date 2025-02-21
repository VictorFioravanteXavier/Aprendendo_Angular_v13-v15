import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSubmitSubmitFormComponent } from './ng-submit-submit-form.component';

describe('NgSubmitSubmitFormComponent', () => {
  let component: NgSubmitSubmitFormComponent;
  let fixture: ComponentFixture<NgSubmitSubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSubmitSubmitFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSubmitSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
