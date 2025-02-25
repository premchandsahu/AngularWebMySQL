import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinginvoiceprofitComponent } from './listinginvoiceprofit.component';

describe('ListinginvoiceprofitComponent', () => {
  let component: ListinginvoiceprofitComponent;
  let fixture: ComponentFixture<ListinginvoiceprofitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListinginvoiceprofitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinginvoiceprofitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
