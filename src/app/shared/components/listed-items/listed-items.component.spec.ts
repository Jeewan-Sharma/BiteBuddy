import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedItemsComponent } from './listed-items.component';

describe('ListedItemsComponent', () => {
  let component: ListedItemsComponent;
  let fixture: ComponentFixture<ListedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListedItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
