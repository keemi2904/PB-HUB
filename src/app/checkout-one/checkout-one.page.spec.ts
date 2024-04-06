import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutOnePage } from './checkout-one.page';

describe('CheckoutOnePage', () => {
  let component: CheckoutOnePage;
  let fixture: ComponentFixture<CheckoutOnePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
