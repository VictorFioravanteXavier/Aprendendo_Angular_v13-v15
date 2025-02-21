import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgFormSelectedComponent } from './ng-form-selected.component';

describe('NgFormSelectedComponent', () => {
  let component: NgFormSelectedComponent;
  let fixture: ComponentFixture<NgFormSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgFormSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgFormSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
