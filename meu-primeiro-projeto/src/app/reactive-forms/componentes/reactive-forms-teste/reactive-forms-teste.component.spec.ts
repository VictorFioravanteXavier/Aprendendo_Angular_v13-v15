import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsTesteComponent } from './reactive-forms-teste.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ReactiveFormsTesteComponent', () => {
  let component: ReactiveFormsTesteComponent;
  let fixture: ComponentFixture<ReactiveFormsTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsTesteComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
