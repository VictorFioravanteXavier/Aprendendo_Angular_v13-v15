import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
