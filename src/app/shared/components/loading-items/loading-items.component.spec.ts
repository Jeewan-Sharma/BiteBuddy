import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingItemsComponent } from './loading-items.component';

describe('LoadingItemsComponent', () => {
  let component: LoadingItemsComponent;
  let fixture: ComponentFixture<LoadingItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
