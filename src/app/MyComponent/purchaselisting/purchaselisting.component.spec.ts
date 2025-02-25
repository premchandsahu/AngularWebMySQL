import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaselistingComponent } from './purchaselisting.component';

describe('PurchaselistingComponent', () => {
  let component: PurchaselistingComponent;
  let fixture: ComponentFixture<PurchaselistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaselistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaselistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
