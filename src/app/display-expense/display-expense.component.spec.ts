import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayExpenseComponent } from './display-expense.component';

describe('DisplayExpenseComponent', () => {
  let component: DisplayExpenseComponent;
  let fixture: ComponentFixture<DisplayExpenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayExpenseComponent]
    });
    fixture = TestBed.createComponent(DisplayExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
