import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertransactionComponent } from './customertransaction.component';

describe('CustomertransactionComponent', () => {
  let component: CustomertransactionComponent;
  let fixture: ComponentFixture<CustomertransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomertransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomertransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
