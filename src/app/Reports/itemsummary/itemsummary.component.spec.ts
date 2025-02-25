import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsummaryComponent } from './itemsummary.component';

describe('ItemsummaryComponent', () => {
  let component: ItemsummaryComponent;
  let fixture: ComponentFixture<ItemsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
