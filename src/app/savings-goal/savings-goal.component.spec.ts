import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsGoalComponent } from './savings-goal.component';

describe('SavingsGoalComponent', () => {
  let component: SavingsGoalComponent;
  let fixture: ComponentFixture<SavingsGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingsGoalComponent]
    });
    fixture = TestBed.createComponent(SavingsGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
