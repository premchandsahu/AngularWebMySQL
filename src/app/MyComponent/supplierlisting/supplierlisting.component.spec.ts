import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierlistingComponent } from './supplierlisting.component';

describe('SupplierlistingComponent', () => {
  let component: SupplierlistingComponent;
  let fixture: ComponentFixture<SupplierlistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupplierlistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierlistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
