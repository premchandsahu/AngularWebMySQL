import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierpaymentlistingComponent } from './supplierpaymentlisting.component';

describe('SupplierpaymentlistingComponent', () => {
  let component: SupplierpaymentlistingComponent;
  let fixture: ComponentFixture<SupplierpaymentlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierpaymentlistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierpaymentlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
