import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingFinanceComponent } from './banking-finance.component';

describe('BankingFinanceComponent', () => {
  let component: BankingFinanceComponent;
  let fixture: ComponentFixture<BankingFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingFinanceComponent]
    });
    fixture = TestBed.createComponent(BankingFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
