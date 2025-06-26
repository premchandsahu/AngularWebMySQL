import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsummarypComponent } from './itemsummaryp.component';

describe('ItemsummarypComponent', () => {
  let component: ItemsummarypComponent;
  let fixture: ComponentFixture<ItemsummarypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsummarypComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsummarypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
