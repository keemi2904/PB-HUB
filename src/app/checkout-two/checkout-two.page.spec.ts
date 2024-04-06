import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutTwoPage } from './checkout-two.page';

describe('CheckoutTwoPage', () => {
  let component: CheckoutTwoPage;
  let fixture: ComponentFixture<CheckoutTwoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
