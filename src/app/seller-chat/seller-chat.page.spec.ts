import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SellerChatPage } from './seller-chat.page';

describe('SellerChatPage', () => {
  let component: SellerChatPage;
  let fixture: ComponentFixture<SellerChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
