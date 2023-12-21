import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysSpecialComponent } from './todays-special.component';

describe('TodaysSpecialComponent', () => {
  let component: TodaysSpecialComponent;
  let fixture: ComponentFixture<TodaysSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodaysSpecialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodaysSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
