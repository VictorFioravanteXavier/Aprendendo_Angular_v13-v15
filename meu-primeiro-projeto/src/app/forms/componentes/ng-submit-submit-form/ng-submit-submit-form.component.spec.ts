import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { NgSubmitSubmitFormComponent } from './ng-submit-submit-form.component';

describe('NgSubmitSubmitFormComponent', () => {
  let component: NgSubmitSubmitFormComponent;
  let fixture: ComponentFixture<NgSubmitSubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSubmitSubmitFormComponent ],
      imports: [ FormsModule ]
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
