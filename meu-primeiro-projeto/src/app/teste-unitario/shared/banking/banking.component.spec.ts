import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ListComponent } from '../investiments/components/list/list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): shoud have poupanca equals 10`, () => {
      expect(component.getPoupanca).toEqual(10)
  })

  it(`(U) getCarteira(): shoud have poupanca equals 50`, () => {
    expect(component.getCarteira).toEqual(50)
  })

  it(`(U) setSacar(): shoud transfer poupanca from carteira `, () => {
    component.setSacar('10');

    expect(component.getPoupanca).toEqual(0);
    expect(component.getCarteira).toEqual(60);
  })

  it(`(U) setSacar(): shoud tranfer poupanca don't have string (isNaN) or poupanca < value`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  })

  it(`(I) setSacar(): shoud transfer poupanca from carteira`, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#inp-sacar').value = '10'
    el.querySelector('#sacar').click();
    fixture.detectChanges()

    expect(el.querySelector('#get-carteira').textContent).toEqual('60')
  })

  it(`(U) setDepositar(): shoud transfer carteira from poupanca `, () => {
    component.setDepositar('50');

    expect(component.getPoupanca).toEqual(60);
    expect(component.getCarteira).toEqual(0);
  })

  it(`(U) setDepositar(): shoud tranfer poupanca don't have string (isNaN) or carteira < value`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();
    
    expect(component.getPoupanca).toEqual(10);
    expect(component.getCarteira).toEqual(50);
  })

  it(`(I) setDepositar(): shoud transfer carteira from poupanca `, () => {
    let el = fixture.debugElement.nativeElement;

    el.querySelector('#inp-depositar').value = '10'
    el.querySelector('#depositar').click();
    fixture.detectChanges()

    expect(el.querySelector('#get-poupanca').textContent).toEqual('20')
  })
  
});
