import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayExpenseComponent } from './display-expense/display-expense.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { CreateExpenseComponent } from './create-expense/create-expense.component';
import { SavingsGoalComponent } from './savings-goal/savings-goal.component';

const routes: Routes = [
  {path:'',component:DisplayCardComponent},
  {path:'expenselist',component:DisplayExpenseComponent},
  {path:'updateexpense/:id',component:UpdateExpenseComponent},
  {path:'carddetail', component:DisplayCardComponent},
  {path:'createExpense', component:CreateExpenseComponent},
  {path:'savingsGoal', component:SavingsGoalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
