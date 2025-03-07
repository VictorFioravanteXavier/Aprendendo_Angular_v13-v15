import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesGuardsComponent } from './routes-guards.component';

describe('RoutesGuardsComponent', () => {
  let component: RoutesGuardsComponent;
  let fixture: ComponentFixture<RoutesGuardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesGuardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesGuardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
