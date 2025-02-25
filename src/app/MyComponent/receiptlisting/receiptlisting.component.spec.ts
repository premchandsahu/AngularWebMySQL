import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptlistingComponent } from './receiptlisting.component';

describe('ReceiptlistingComponent', () => {
  let component: ReceiptlistingComponent;
  let fixture: ComponentFixture<ReceiptlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReceiptlistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiptlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
