import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItembalanceComponent } from './itembalance.component';

describe('ItembalanceComponent', () => {
  let component: ItembalanceComponent;
  let fixture: ComponentFixture<ItembalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItembalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItembalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
